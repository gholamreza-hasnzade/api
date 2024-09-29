import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig, AxiosHeaders, AxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
}

class AxiosService {
    private instance: AxiosInstance;
    private isRefreshing: boolean = false;
    private failedQueue: Array<any> = [];

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.instance.interceptors.request.use(
            this.handleRequest.bind(this),
            this.handleError.bind(this)
        );

        this.instance.interceptors.response.use(
            this.handleResponse.bind(this),
            this.handleResponseError.bind(this)
        );
    }

    private handleRequest(config: CustomAxiosRequestConfig): CustomAxiosRequestConfig | Promise<CustomAxiosRequestConfig> {
        const token = localStorage.getItem('access_token');
        if (token) {
            if (!config.headers) {
                config.headers = new AxiosHeaders();
            }
            config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
    }

    private handleResponse(response: AxiosResponse): AxiosResponse {
        return response;
    }

    private handleError(error: AxiosError): Promise<AxiosError> {
        return Promise.reject(error);
    }

    private async handleResponseError(error: AxiosError): Promise<any> {
        const originalRequest = error.config as CustomAxiosRequestConfig;

        if (originalRequest && error.response?.status === 401 && !originalRequest._retry) {
            if (this.isRefreshing) {
                try {
                    const token = await new Promise((resolve, reject) => {
                        this.failedQueue.push({ resolve, reject });
                    });
                    if (originalRequest && originalRequest.headers) {
                        originalRequest.headers.set('Authorization', 'Bearer ' + token);
                    }
                    return await axios(originalRequest);
                } catch (err) {
                    return await Promise.reject(err);
                }
            }

            originalRequest._retry = true;
            this.isRefreshing = true;

            const refreshToken = localStorage.getItem('refresh_token');
            return new Promise((resolve, reject) => {
                axios
                    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, { token: refreshToken })
                    .then(({ data }) => {
                        localStorage.setItem('access_token', data.access_token);
                        this.instance.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;

                        if (originalRequest && originalRequest.headers) {
                            originalRequest.headers.set('Authorization', 'Bearer ' + data.access_token);
                        }

                        this.processQueue(null, data.access_token);
                        resolve(axios(originalRequest));
                    })
                    .catch(err => {
                        this.processQueue(err, null);
                        reject(err);
                    })
                    .finally(() => {
                        this.isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    }

    private processQueue(error: any, token: string | null = null) {
        this.failedQueue.forEach(prom => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });

        this.failedQueue = [];
    }

    getInstance(): AxiosInstance {
        return this.instance;
    }

    get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.get(url, config);
    }

    post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.post(url, data, config);
    }

    put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.put(url, data, config);
    }

    delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        return this.instance.delete(url, config);
    }
}

const axiosService = new AxiosService(process.env.NEXT_PUBLIC_API_URL!);

export default axiosService.getInstance();

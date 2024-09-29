export interface IForm {
  holooSoftwareSerial?: number | string;
  holooSoftwareCode?: number | string;
  ownerMobileNo?: number | string;
  isOpenRule?: boolean;
  isOpenVerify?: boolean;
  formError?: {
    holooSoftwareSerial?: string;
    holooSoftwareCode?: string;
    ownerMobileNo?: string;
    acceptTerms?: string;
  };
  response?: Record<string, string>;
  isLoading?: boolean;
  acceptTerms: boolean;
}
export type IFieldName = 'holooSoftwareSerial' | 'holooSoftwareCode' | 'ownerMobileNo' | 'acceptTerms';

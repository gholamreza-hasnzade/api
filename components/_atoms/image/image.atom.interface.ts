import { StaticImageData } from 'next/image';
// * Interface
export interface IImage {
  /**
   * The URL of the image or a reference to `StaticImageData`.
   * Required for the component to function.
   */
  src: string | StaticImageData;

  /**
   * Alternative text for the image, essential for accessibility and SEO.
   * Required for the component to function.
   */
  alt: string;

  /**
   * The width of the image in pixels.
   * Optional, but recommended for performance optimization, especially for remote images.
   */
  width?: number;

  /**
   * The height of the image in pixels.
   * Optional, but recommended for performance optimization, especially for remote images.
   */
  height?: number;


  /**
   * (Advanced) A priority prop to prioritize loading of certain images over others.
   * Set to `true` for critical images that should load first.
   * Defaults to `false` if not provided.
   */
  priority?: boolean;
  /**
   * (Advanced) A quality prop to control the quality of the image optimization.
   * Values range from 1 (lowest quality) to 100 (highest quality).
   * Defaults to 75 if not provided.
   */
  quality?: number;
  /**
   * (Advanced) A blurDataURL prop to provide a base64 encoded blurred version of the image.
   * This can improve the perceived loading speed by showing a blurry representation before the full image loads.
   */
  blurDataURL?: string;

  /**
   * A boolean flag to indicate if the image should be treated as unoptimized by Next.js.
   * Defaults to `false` if not provided.
   */
  unoptimized?: boolean;
}
// * Import libraries
import { render } from '@testing-library/react';
import { ImageAtom } from '.../../../components/_atoms/image/image.atom'; // Replace with your component path

describe('ImageAtom component', () => {
  // Test for rendering with string URL
  test('should render the image with a string URL', () => {
    const { getByAltText } = render(
      <ImageAtom src="https://example.com/image.jpg" alt="Test image" />,
    );
    const image = getByAltText('Test image');
    expect(image).toBeInTheDocument();
  });

  // Test for rendering with StaticImageData
  test('should render the image with StaticImageData', () => {
    const staticImageData = {
      src: '/public/logo.png',
      width: 200,
      height: 100,
      alt: 'Company logo',
    };
    const { getByAltText } = render(<ImageAtom src={staticImageData} alt="image" />);
    const image = getByAltText('Company logo');
    expect(image).toBeInTheDocument();
  });

  // Test for alt text
  test('should throw an error if alt text is missing', () => {
    expect(() =>
      render(<ImageAtom src="https://example.com/image.jpg" alt="image" />),
    ).toThrowError(/alt text is required/i);
  });

  // Test for props (width, height, etc.)
  test('should render the image with specified width and height', () => {
    const { getByAltText } = render(
      <ImageAtom src="https://example.com/image.jpg" alt="Test image" width={300} height={200} />,
    );
    const image = getByAltText('Test image');
    expect(image).toHaveAttribute('width', '300');
    expect(image).toHaveAttribute('height', '200');
  });

  // You can add more tests for other props (priority, quality, blurDataURL, unoptimized)
});

import { render, fireEvent } from '@testing-library/react';
import { ButtonAtom } from '../../../../components/_atoms/button/button.atom'; // Replace with your component path

describe('ButtonAtom component', () => {
  test('should render the button text content', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<ButtonAtom>{buttonText}</ButtonAtom>);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  test('should trigger the onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<ButtonAtom onClick={mockOnClick}>Click me</ButtonAtom>);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('should apply the primary variant style by default', () => {
    const { getByRole } = render(<ButtonAtom>Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'rgb(0, 0, 0)',
      color: 'rgb(255, 255, 255)',
    }); // Use rgb for better Jest compatibility
  });

  test('should apply the specified variant style', () => {
    const { getByRole } = render(<ButtonAtom variant="secondary">Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'rgb(204, 204, 204)',
      color: 'rgb(51, 51, 51)',
    }); // Use rgb for better Jest compatibility
  });

  test('should apply custom styles', () => {
    const mockStyle = { backgroundColor: 'red', color: 'yellow' };
    const { getByRole } = render(<ButtonAtom style={mockStyle}>Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveStyle(mockStyle);
  });

  test('should set the button type', () => {
    const { getByRole } = render(<ButtonAtom type="submit">Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('should set the button size', () => {
    const { getByRole } = render(<ButtonAtom size="large">Click me</ButtonAtom>);
    const button = getByRole('button');
    // Adjust these assertions based on how size styles are implemented in your component
    expect(button).toHaveStyle({ padding: '15px 25px' }); // Example for large size
  });

  test('should disable the button', () => {
    const { getByRole } = render(<ButtonAtom disabled>Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  test('should apply additional props', () => {
    const { getByRole } = render(
      <ButtonAtom aria-label="This is a button" tabIndex={0}>
        Click me
      </ButtonAtom>,
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'This is a button');
    expect(button).toHaveAttribute('tabIndex', '0');
  });

  test('should apply the tertiary variant style', () => {
    const { getByRole } = render(<ButtonAtom variant="tertiary">Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'transparent',
      color: 'rgb(0, 123, 255)',
    }); // Use rgb for better Jest compatibility
  });

  test('should apply the outline variant style', () => {
    const { getByRole } = render(<ButtonAtom variant="outline">Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toHaveStyle({
      backgroundColor: 'transparent',
      border: '1px solid rgb(0, 123, 255)',
      color: 'rgb(0, 123, 255)',
    }); // Use rgb for better Jest compatibility
  });

  test('should set the button size to small', () => {
    const { getByRole } = render(<ButtonAtom size="small">Click me</ButtonAtom>);
    const button = getByRole('button');
    // Adjust these assertions based on how size styles are implemented in your component
    expect(button).toHaveStyle({ padding: '5px 10px', fontSize: '14px' }); // Example for small size
  });
  // You can add more test cases for other props and edge cases

  test('should disable the button', () => {
    const { getByRole } = render(<ButtonAtom disabled>Click me</ButtonAtom>);
    const button = getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({ opacity: 0.5 }); // Check that the opacity is reduced
    expect(button).toHaveStyle({ pointerEvents: 'none' }); // Check that pointer events are disabled
  });
});

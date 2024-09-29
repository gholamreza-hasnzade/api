// * Import libraries
import { render, fireEvent } from '@testing-library/react';
import { InputAtom } from '../../../../components/_atoms/input/input.atom'; // Replace with your component path

describe('InputAtom component', () => {
  // Test for rendering the input element
  test('should render the input element', () => {
    const { getByRole } = render(<InputAtom id="test-input" name="test-name" />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  // Test for default variant (primary)
  test('should render with primary variant by default', () => {
    const { getByRole } = render(<InputAtom id="test-input" name="test-name" />);
    const input = getByRole('textbox');
    expect(input).toHaveStyle({ backgroundColor: 'white', color: '#fff' }); // Assuming white background for primary variant
  });

  // Test for specific variants
  test('should render the outline variant', () => {
    const { getByRole } = render(<InputAtom id="test-input" name="test-name" variant="outline" />);
    const input = getByRole('textbox');
    expect(input).toHaveStyle({
      backgroundColor: 'transparent',
      color: '#333',
    }); // Assuming transparent background for outline variant
  });

  test('should render the tertiary variant', () => {
    const { getByRole } = render(<InputAtom id="test-input" name="test-name" variant="tertiary" />);
    const input = getByRole('textbox');
    expect(input).toHaveStyle({
      backgroundColor: 'transparent',
      color: '#333',
      borderBottomColor: '#007bff',
    });
  });

  // Test for disabled state
  test('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(<InputAtom id="test-input" name="test-name" disabled />);
    const input = getByRole('textbox');
    expect(input).toBeDisabled();
  });

  // Test for onChange event
  test('should call the onChange handler when the value changes', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(
      <InputAtom id="test-input" name="test-name" onChange={mockOnChange} />,
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Expect an event object
  });

  // You can add more tests for other props (placeholder, type, etc.)
});

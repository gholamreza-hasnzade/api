import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { LinkAtom } from '../../../../components/_atoms/link/link.atom'; // Replace wtesth the path to your LinkAtom component

describe('LinkAtom component', () => {
  test('renders the link text', () => {
    render(<LinkAtom href="/" children="Home" />);
    const link = screen.getByRole('link');
    expect(link.textContent).toBe('Home');
  });

  test('adds the correct href attribute', () => {
    render(<LinkAtom href="/about" children="About Us" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  });

  test('applies custom class names', () => {
    render(<LinkAtom href="/" children="Home" className="my-custom-link" />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('my-custom-link');
  });

  // Add more tests for other props and functionaltesties of your LinkAtom component

  test('renders the link text', () => {
    render(<LinkAtom href="/" children="Home" />);
    const link = screen.getByRole('link');
    expect(link.textContent).toBe('Home');
  });

  test('adds the correct href attribute', () => {
    render(<LinkAtom href="/about" children="About Us" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  });

  test('applies custom class names', () => {
    render(<LinkAtom href="/" children="Home" className="my-custom-link" />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('my-custom-link');
  });

  test('calls the onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<LinkAtom href="/" children="Home" onClick={mockOnClick} />);
    const link = screen.getByRole('link');
    fireEvent.click(link); // Use fireEvent from @testing-library/react
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

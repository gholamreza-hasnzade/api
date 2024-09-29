// Import necessary libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from '../../../../components/_atoms/typography/typography.atom'; // Adjust path as needed

// Mock theme object if needed (assuming theme is used)
const mockTheme = { BLACK: '#000' };

// Import ThemeProvider if your component utilizes a theme provider
import { ThemeProvider } from '@emotion/react';

// Test suite for Typography component
describe('Typography component', () => {
  // Test case: Renders Typography component with props
  test('renders Typography component with props', () => {
    // Render component with theme provider (if needed) and specific props
    render(
      <ThemeProvider theme={mockTheme}>
        {' '}
        // Mock theme if necessary
        <Typography id="test-id" fontSize={20} color="red">
          This is a test message
        </Typography>
      </ThemeProvider>,
    );

    // Find the rendered text element by its content
    const textElement = screen.getByText('This is a test message');

    // Assert that the element is rendered
    expect(textElement).toBeInTheDocument();

    // Assert that the element has the expected styles (color, id)
    expect(textElement).toHaveStyle({ color: 'red' });
    expect(textElement).toHaveAttribute('id', 'test-id');
  });

  // Test case: Renders Typography component with default props
  test('renders Typography component with default props', () => {
    // Render component without additional props
    render(
      <Typography color="black" fontSize={16} fontWeight={500}>
        This is a test message
      </Typography>,
    );

    // Find the rendered text element by its content
    const textElement = screen.getByText('This is a test message');

    // Assert that the element is rendered
    expect(textElement).toBeInTheDocument();

    // Assert that the element has the expected default styles (color, font size, weight)
    expect(textElement).toHaveStyle({ color: 'black' }); // Assuming mockTheme.BLACK is #000
    expect(textElement).toHaveStyle({ fontSize: '16px' });
    expect(textElement).toHaveStyle({ fontWeight: '500' });
  });

  // Add more test cases as needed...
});

// * Import toold
import { ReactNode, CSSProperties } from 'react';

// Interface for all props accepted by the AllPropsButton component
export interface IButton {
  // Button text content
  children: ReactNode;

  // Optional click handler function
  onClick?: () => void;

  // Button type (default is 'button')
  type?: 'button' | 'submit' | 'reset';

  // Button size (default is 'medium')
  size?: 'small' | 'medium' | 'large';

  // Button variant (default is 'primary')
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';

  // Flag to disable the button (default is false)
  disabled?: boolean;

  // Additional CSS class names to apply (optional)
  className?: string;

  // Custom styles to apply directly (optional)
  style?: CSSProperties;

  // Additional props to pass through to the underlying button element (optional)
  ariaLabel?: string; // For accessibility
  tabIndex?: number; // For accessibility or focus management
  // ... you can add more props as needed
}

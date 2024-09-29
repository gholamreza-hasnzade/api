// * import tools
import { FC } from 'react';
import styled from '@emotion/styled';
// * import style
import { IButton } from '@/components/_atoms/button/button.atom.interface';

// Import a button styling library like `@emotion/react` or a custom solution

const Button = styled.button<IButton>`
  /* Base styles for all buttons (padding, font size, etc.) */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 35px;
  width: 100%;
  font-family: 'IRANSans';
  cursor: pointer;
  outline: none;
  /* Styles based on variant */
  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return `
                    background-color: #000;
                    color: #fff;
                `;
      case 'secondary':
        return `
                    background-color: #ccc;
                    color: #333;
                `;
      case 'tertiary':
        return `
                    background-color: transparent;
                    color: #007bff;
                `;
      case 'outline':
        return `
                    background-color: transparent;
                    border: 1px solid #007bff;
                    color: #007bff;
                `;
      default:
        return 'primary';
    }
  }}
  /* Styles based on size */
    ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          padding: 5px 10px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 15px 25px;
          font-size: 18px;
        `;
      default:
        return '';
    }
  }}

    /* Apply disabled styles */
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  /* Apply custom styles (if provided) */
`;
export const ButtonAtom: FC<IButton> = ({
  children,
  onClick,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  className,
  style,
  ariaLabel,
  tabIndex,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      className={className}
      style={style}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

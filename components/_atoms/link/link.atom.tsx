// * Import Tools
import { FC, AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

// * Import
import { ILink } from '@/components/_atoms/link/link.atom.interface';

interface StyledAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  fontSize?: number;
}

const LinkStyle = styled(Link)<StyledAnchorProps>`
  line-height: 1.7;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  text-decoration: none;
  &.primary {
    color: #3f3f3f;
  }
`;

export const LinkAtom: FC<ILink> = ({
  href,
  children,
  color,
  fontSize,
  target,
  rel,
  ariaLabel,
  className,
  onClick,
}) => {
  return (
    <LinkStyle
      href={href}
      color={color} // Use status color by default, allow overriding with color prop
      fontSize={fontSize}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </LinkStyle>
  );
};

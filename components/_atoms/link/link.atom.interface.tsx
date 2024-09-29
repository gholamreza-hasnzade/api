// * Import Interfaces
import { ReactNode } from 'react';

export interface ILink {
  children?: ReactNode;
  href: string;
  color?: string;
  fontSize?: number;
  target?: string; // Optional: Where to open the link
  rel?: string; // Optional: Relationship between documents
  ariaLabel?: string; // Optional: Text for screen readers
  className?: string; // Optional: Apply custom CSS classes
 // onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Optional: Handle click events
 onClick?: () => void; // Optional: Handle click events
}

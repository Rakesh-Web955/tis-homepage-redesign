import { ArrowUpRight } from 'lucide-react';

export default function Button({ children, href = '#admission', variant = 'primary', onClick }) {
  const content = <>{children}<ArrowUpRight size={17} strokeWidth={2.2} /></>;
  const className = `button button-${variant}`;
  if (onClick) return <button className={className} onClick={onClick} data-cursor>{content}</button>;
  return <a className={className} href={href} data-cursor>{content}</a>;
}

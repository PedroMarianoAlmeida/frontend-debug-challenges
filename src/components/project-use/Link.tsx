import type { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => <a href={href}>{children}</a>;
export default Link;

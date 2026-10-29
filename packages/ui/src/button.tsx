import type { ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a className={`lwp-button lwp-button-${variant}`} href={href}>
      {children}
    </a>
  );
}

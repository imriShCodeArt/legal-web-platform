"use client";

import MuiButton from "@mui/material/Button";
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
    <MuiButton
      color={variant === "primary" ? "primary" : "secondary"}
      href={href}
      variant={variant === "primary" ? "contained" : "outlined"}
    >
      {children}
    </MuiButton>
  );
}

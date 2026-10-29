"use client";

import MuiLink from "@mui/material/Link";
import type { ReactNode } from "react";

export function Link({
  href,
  children,
  tone = "accent",
  underline = "hover",
}: {
  href: string;
  children: ReactNode;
  tone?: "accent" | "inherit";
  underline?: "hover" | "always";
}) {
  return (
    <MuiLink
      color={tone === "inherit" ? "inherit" : "primary"}
      href={href}
      underline={underline}
    >
      {children}
    </MuiLink>
  );
}

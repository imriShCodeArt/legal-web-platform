"use client";

import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

const variants = {
  1: "h1",
  2: "h2",
  3: "h3",
  6: "h6",
} as const;

export function Heading({
  level,
  children,
  href,
  balance = false,
  gutterBottom = false,
  maxWidth,
  compact = false,
}: {
  level: keyof typeof variants;
  children: ReactNode;
  href?: string;
  balance?: boolean;
  gutterBottom?: boolean;
  maxWidth?: string;
  compact?: boolean;
}) {
  return (
    <Typography
      gutterBottom={gutterBottom}
      {...(href ? { component: "a" as const, href } : {})}
      sx={{
        ...(href ? { color: "inherit", textDecoration: "none" } : null),
        ...(balance ? { textWrap: "balance" } : null),
        ...(maxWidth ? { maxWidth } : null),
        ...(compact ? { fontSize: "clamp(2.1rem, 4vw, 3.1rem)" } : null),
      }}
      variant={variants[level]}
    >
      {children}
    </Typography>
  );
}

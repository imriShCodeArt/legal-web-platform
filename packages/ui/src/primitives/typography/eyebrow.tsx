"use client";

import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "accent",
  spaced = false,
}: {
  children: ReactNode;
  tone?: "accent" | "soft";
  spaced?: boolean;
}) {
  return (
    <Typography
      color={tone === "accent" ? "primary" : "primary.light"}
      sx={spaced ? { my: 1 } : undefined}
      variant="overline"
    >
      {children}
    </Typography>
  );
}

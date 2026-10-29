"use client";

import MuiContainer from "@mui/material/Container";
import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <MuiContainer maxWidth={false} sx={{ maxWidth: 1080 }}>
      {children}
    </MuiContainer>
  );
}

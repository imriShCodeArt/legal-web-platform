"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo, type ReactNode } from "react";
import { createFirmTheme, type FirmThemeColors } from "./theme";

export function ThemeRegistry({
  children,
  colors,
}: {
  children: ReactNode;
  colors?: FirmThemeColors;
}) {
  const theme = useMemo(() => createFirmTheme(colors), [colors]);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

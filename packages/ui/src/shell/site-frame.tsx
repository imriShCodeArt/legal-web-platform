"use client";

import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import type { ReactNode } from "react";
import type { FirmProfile, NavItem } from "../foundation";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function SiteFrame({
  firm,
  nav,
  children,
}: {
  firm: FirmProfile;
  nav: NavItem[];
  children: ReactNode;
}) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MuiLink
        href="#content"
        sx={{
          bgcolor: "background.paper",
          left: 12,
          position: "absolute",
          px: 1.5,
          py: 1,
          top: 12,
          transform: "translateY(-150%)",
          zIndex: 2,
          "&:focus": {
            transform: "none",
          },
        }}
      >
        Skip to content
      </MuiLink>
      <SiteHeader firm={firm} nav={nav} />
      <Box component="main" id="content" sx={{ flex: 1 }}>
        {children}
      </Box>
      <SiteFooter firm={firm} nav={nav} />
    </Box>
  );
}

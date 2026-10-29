"use client";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "../layout";
import { Button, Link } from "../primitives/actions";
import { Heading } from "../primitives/typography";
import type { FirmProfile, NavItem } from "../foundation";

export function SiteHeader({
  firm,
  nav,
}: {
  firm: FirmProfile;
  nav: NavItem[];
}) {
  return (
    <AppBar
      color="transparent"
      elevation={0}
      position="static"
      sx={{
        bgcolor: "background.default",
        borderBottom: 1,
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 1.5,
            justifyContent: "space-between",
            py: 1.5,
          }}
        >
          <Heading href="/" level={6}>
            {firm.name}
          </Heading>
          <Stack
            aria-label="Primary"
            component="nav"
            direction="row"
            sx={{
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2.5,
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            {nav.map((item) => (
              <Link href={item.href} key={item.href} tone="inherit">
                {item.label}
              </Link>
            ))}
            <Button href={`tel:${firm.phoneHref}`}>{firm.phone}</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

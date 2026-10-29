"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FirmProfile, NavItem } from "../foundation";
import { Container } from "../layout";
import { Link } from "../primitives/actions";
import { Eyebrow, Heading } from "../primitives/typography";

export function SiteFooter({
  firm,
  nav,
}: {
  firm: FirmProfile;
  nav: NavItem[];
}) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
        mt: "auto",
        py: 5,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Heading level={6}>{firm.name}</Heading>
            <Typography sx={{ mt: 1 }}>
              {firm.address.map((line) => (
                <Box component="span" key={line} sx={{ display: "block" }}>
                  {line}
                </Box>
              ))}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Eyebrow tone="soft">Contact</Eyebrow>
            <Stack spacing={0.5} sx={{ mt: 1 }}>
              <Link href={`tel:${firm.phoneHref}`} tone="inherit" underline="always">
                {firm.phone}
              </Link>
              <Link href={`mailto:${firm.email}`} tone="inherit" underline="always">
                {firm.email}
              </Link>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack aria-label="Footer" component="nav" spacing={0.5}>
              <Eyebrow tone="soft">Explore</Eyebrow>
              {nav.map((item) => (
                <Link href={item.href} key={item.href} tone="inherit">
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Typography sx={{ maxWidth: "46rem", mt: 4 }} variant="body2">
          {firm.disclaimer}
        </Typography>
      </Container>
    </Box>
  );
}

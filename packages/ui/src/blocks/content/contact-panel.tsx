"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FirmProfile } from "../../foundation";
import { Link } from "../../primitives/actions";
import { Eyebrow } from "../../primitives/typography";

export function ContactPanel({ firm }: { firm: FirmProfile }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Eyebrow>Office</Eyebrow>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          {firm.address.map((line) => (
            <Box component="span" key={line} sx={{ display: "block" }}>
              {line}
            </Box>
          ))}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Eyebrow>Phone and email</Eyebrow>
        <Stack spacing={0.5} sx={{ mt: 1 }}>
          <Link href={`tel:${firm.phoneHref}`} underline="always">
            {firm.phone}
          </Link>
          <Link href={`mailto:${firm.email}`} underline="always">
            {firm.email}
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

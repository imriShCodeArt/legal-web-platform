"use client";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { Attorney } from "../../foundation";
import { Eyebrow, Heading } from "../../primitives/typography";

export function AttorneyGrid({
  attorneys,
  showBio = false,
}: {
  attorneys: Attorney[];
  showBio?: boolean;
}) {
  return (
    <Grid container spacing={2}>
      {attorneys.map((attorney) => (
        <Grid key={attorney.name} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card component="article" sx={{ height: "100%", p: 2.5 }} variant="outlined">
            <Heading level={3}>{attorney.name}</Heading>
            <Eyebrow spaced>{attorney.role}</Eyebrow>
            <Typography color="text.secondary">{attorney.focus}</Typography>
            {showBio && attorney.bio ? (
              <Typography color="text.secondary" sx={{ mt: 1.5 }}>
                {attorney.bio}
              </Typography>
            ) : null}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

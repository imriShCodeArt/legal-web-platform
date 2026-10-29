"use client";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { PracticeArea } from "../../foundation";
import { Heading } from "../../primitives/typography";

export function PracticeAreas({ areas }: { areas: PracticeArea[] }) {
  return (
    <Grid container spacing={2}>
      {areas.map((area) => (
        <Grid key={area.title} size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ height: "100%" }} variant="outlined">
            <CardActionArea
              href={area.href}
              sx={{
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                p: 2.5,
              }}
            >
              <Heading gutterBottom level={3}>
                {area.title}
              </Heading>
              <Typography color="text.secondary">{area.summary}</Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

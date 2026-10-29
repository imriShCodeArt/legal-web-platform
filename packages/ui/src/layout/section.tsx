"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { Eyebrow, Heading } from "../primitives/typography";
import { Container } from "./container";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ borderTop: 1, borderColor: "divider", py: 6.5 }}
    >
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading balance level={2}>
          {title}
        </Heading>
        {intro ? (
          <Typography
            color="text.secondary"
            sx={{ fontSize: "1.125rem", maxWidth: "40rem", mt: 2 }}
          >
            {intro}
          </Typography>
        ) : null}
        <Box sx={{ mt: 3.5 }}>{children}</Box>
      </Container>
    </Box>
  );
}

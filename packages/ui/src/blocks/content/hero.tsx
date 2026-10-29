"use client";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container } from "../../layout";
import { Button } from "../../primitives/actions";
import { Eyebrow, Heading } from "../../primitives/typography";

type Action = {
  href: string;
  label: string;
};

export function Hero({
  eyebrow,
  title,
  lede,
  primaryAction,
  secondaryAction,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  compact?: boolean;
}) {
  return (
    <Box
      component="section"
      sx={{ pb: compact ? 1 : 6.5, pt: compact ? 6 : 9 }}
    >
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading
          balance
          compact={compact}
          level={1}
          maxWidth={compact ? "20ch" : "16ch"}
        >
          {title}
        </Heading>
        {lede ? (
          <Typography
            color="text.secondary"
            sx={{ fontSize: "1.125rem", maxWidth: "40rem", mt: 2 }}
          >
            {lede}
          </Typography>
        ) : null}
        {primaryAction || secondaryAction ? (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { xs: "stretch", sm: "center" }, mt: 3.5 }}
          >
            {primaryAction ? (
              <Button href={primaryAction.href}>{primaryAction.label}</Button>
            ) : null}
            {secondaryAction ? (
              <Button href={secondaryAction.href} variant="secondary">
                {secondaryAction.label}
              </Button>
            ) : null}
          </Stack>
        ) : null}
      </Container>
    </Box>
  );
}

import { createTheme } from "@mui/material/styles";

const serif = '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif';
const sans = '"Segoe UI", system-ui, sans-serif';

export type FirmThemeColors = {
  ink?: string;
  paper?: string;
  accent?: string;
  accentContrast?: string;
  muted?: string;
  line?: string;
  card?: string;
};

export function createFirmTheme(colors: FirmThemeColors = {}) {
  const ink = colors.ink ?? "#1b2838";
  const paper = colors.paper ?? "#f6f3ee";
  const accent = colors.accent ?? "#6e2c2c";
  const accentContrast = colors.accentContrast ?? "#fbf7f2";
  const muted = colors.muted ?? "#5c6570";
  const line = colors.line ?? "#e0d8cc";
  const card = colors.card ?? "#fffcf8";

  return createTheme({
    palette: {
      mode: "light",
      primary: {
        main: accent,
        light: "#e7c7c0",
        contrastText: accentContrast,
      },
      secondary: {
        main: ink,
        contrastText: "#f4efe8",
      },
      background: {
        default: paper,
        paper: card,
      },
      text: {
        primary: ink,
        secondary: muted,
      },
      divider: line,
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: sans,
      fontSize: 17,
      body1: {
        fontSize: "1.0625rem",
        lineHeight: 1.6,
      },
      h1: {
        fontFamily: serif,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        fontSize: "clamp(2.6rem, 5vw, 4.25rem)",
      },
      h2: {
        fontFamily: serif,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
      },
      h3: {
        fontFamily: serif,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        fontSize: "1.45rem",
      },
      h6: {
        fontFamily: serif,
        fontWeight: 500,
        fontSize: "1.35rem",
        letterSpacing: "0.01em",
        lineHeight: 1.2,
      },
      overline: {
        fontWeight: 600,
        letterSpacing: "0.14em",
        lineHeight: 1.4,
      },
      button: {
        fontWeight: 500,
        letterSpacing: 0,
        lineHeight: 1.2,
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            padding: "0.7rem 1.05rem",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: paper,
            color: ink,
          },
        },
      },
    },
  });
}

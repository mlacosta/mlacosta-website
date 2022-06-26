import { createTheme } from "@mui/material/styles";

export const SIDEBAR_WIDTH = "300px";

export const palette = {
  primary: {
    main: "hsl(219, 37%, 17%)",
    dark: "hsl(211, 53%, 11%)",
    light: "hsl(212, 29%, 36%)",
  },
  text: {
    primary: "hsl(75, 6%, 87%)",
    secondary: "hsl(214, 23%, 56%)",
  },
  info: {
    main: "hsl(75, 6%, 87%)",
  },
  background: {
    default: "hsl(219, 37%, 17%)",
    paper: "hsl(0, 0%, 100%)",
  },
};

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: "Oxygen, sans-serif",
    caption: {
      fontSize: "0.85rem",
      color: palette.text.secondary,
    },
  },
});

import { createTheme } from "@mui/material";

const palette = {
  primary: {
    main: "hsl(219, 37%, 17%)",
    dark: "hsl(211, 53%, 11%)",
    light: "hsl(212, 29%, 36%)",
  },
  text: {
    primary: "hsl(75, 6%, 87%)",
    secondary: "hsl(214, 23%, 56%)",
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
      fontSize: "0.8rem",
      color: palette.text.secondary,
    },
  },
});

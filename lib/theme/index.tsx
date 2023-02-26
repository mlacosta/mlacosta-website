import { createTheme } from '@mui/material/styles';

export const MAIN_MARGIN = '200px';

export const palette = {
  primary: {
    main: 'hsl(219, 37%, 17%)',
    dark: 'hsl(211, 53%, 11%)',
    light: 'hsl(212, 29%, 36%)',
  },
  text: {
    primary: 'hsl(75, 6%, 87%)',
    secondary: 'hsl(214, 23%, 56%)',
  },
  info: {
    main: 'hsl(75, 6%, 87%)',
  },
  background: {
    default: 'hsl(219, 37%, 17%)',
    paper: 'hsl(0, 0%, 100%)',
  },
};

export const theme = createTheme({
  palette,
  typography: {
    fontSize: 14,
    fontFamily: 'Oxygen, sans-serif',
    caption: {
      fontSize: '0.8rem',
      color: palette.text.secondary,
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 300,
      color: palette.primary.dark,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 300,
      color: palette.primary.main,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      color: palette.text.secondary,
    },
  },
});

import { createTheme, ThemeOptions } from '@mui/material/styles';
import tokens from './tokens';

export const createAppTheme = (mode: 'light' | 'dark' = 'light') => {
  const palette = {
    mode,
    primary: { main: tokens.palette.primary.main, contrastText: tokens.palette.primary.contrastText },
    secondary: { main: tokens.palette.secondary.main, contrastText: tokens.palette.secondary.contrastText },
    error: { main: tokens.palette.error.main },
    background: {
      default: mode === 'light' ? tokens.palette.background.default : '#0a0a0a',
      paper: tokens.palette.background.default,
    },
    text: { primary: tokens.palette.text.primary, secondary: tokens.palette.text.secondary },
  } as const;

  const theme = createTheme({
    palette,
    spacing: tokens.spacing,
    typography: {
      fontFamily: tokens.typography.fontFamily,
      h1: { fontWeight: 700, fontSize: '2rem' },
      h2: { fontWeight: 600, fontSize: '1.5rem' },
      body1: { fontSize: '1rem' },
      button: { textTransform: 'none' as const },
    },
    shape: { borderRadius: tokens.shape.borderRadius },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { textTransform: 'none' } },
      },
    },
  } as ThemeOptions);

  return theme;
};

export default createAppTheme;

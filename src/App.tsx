import { useMemo } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import Main from "./components/layout/Main";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import type { ThemeOptions } from '@mui/material'
import Themes from './plugins/themes'
import useMediaQuery from '@mui/material/useMediaQuery';
import ReloadPrompt from '@/components/ReloadPrompt'
import { SnackbarProvider } from 'notistack';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => {
    return createTheme(getDesignTokens(prefersDarkMode))
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Box sx={{
          bgcolor: theme.palette.surface.main
        }}>
          {/* <Header /> */}
          <Main />
          <Nav />
        </Box>
        <ReloadPrompt />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

function getDesignTokens(isDark: boolean): ThemeOptions {
  return {
    typography: {
      fontFamily: [
        '"Google Sans"',
        'Roboto',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode: isDark ? 'dark' : 'light',
      ...(isDark ? Themes.GreenRockyMountains.palette.dark : Themes.GreenRockyMountains.palette.light)
    }
  }
}

export default App;

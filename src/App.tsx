import { useMemo, useState } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import Main from "./components/layout/Main";
import { Box, createTheme, ThemeProvider, useTheme } from "@mui/material";
import type { ThemeOptions } from '@mui/material'
import Themes from './plugins/themes'
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => {
    return createTheme(getDesignTokens(false))
  }, [prefersDarkMode])
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        bgcolor: theme.palette.surface.main
      }}>
        {/* <Header /> */}
        <Main />
        <Nav />
      </Box>
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

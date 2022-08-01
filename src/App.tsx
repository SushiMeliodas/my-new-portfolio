import { useState, useMemo, createContext } from 'react';

// import Box from '@mui/material/Box';
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Grow from '@mui/material/Grow';

// import './App.css';
import NavBar from './components/layout/NavBar';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <NavBar toggleColorMode={toggleColorMode} />
          <Box component='main' sx={{ p: 3 }}>
            <Toolbar />
            Inside
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

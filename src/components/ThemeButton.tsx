import React, { useContext, createContext } from 'react';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

interface Props {
  toggleColorMode: Function;
}

const ThemeButton = (props: Props) => {
  const { toggleColorMode } = props;
  const theme = useTheme();

  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={() => {
          toggleColorMode();
        }}
        color='inherit'
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};

export default ThemeButton;

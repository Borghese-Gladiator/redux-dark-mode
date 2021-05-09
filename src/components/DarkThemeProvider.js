import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { selectMode } from '../features/darkThemeToggle/darkThemeToggleSlice';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(selectMode);
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
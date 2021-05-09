import React from 'react';
// Styling
import styled from 'styled-components';
import theme from "styled-theming";
// Components
import DarkThemeProvider from './components/DarkThemeProvider';
import DarkThemeToggle from './features/darkThemeToggle/DarkThemeToggle';
import Counter from './features/counter/Counter';

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const App = () => (
  <DarkThemeProvider>
    <Container>
      <h1>My Dark Theme Is Better Than Yours</h1>
      <DarkThemeToggle />
      <Counter />
    </Container>
  </DarkThemeProvider>
);

export default App;

/*
const COLORS = {
  blue: '#213458',
  white: '#FFF',
  charcoal: '#353C51'
}

export const LIGHT_MODE = {
  appBarColor: COLORS.white,
  headerIconColor: COLORS.white,
  backgroundColor: COLORS.white,
  primaryBtnColor: COLORS.white,
  secondaryBtnColor: COLORS.white,
}

export const DARK_MODE = {
  appBarColor: COLORS.white,
  headerIconColor: COLORS.white,
  backgroundColor: COLORS.white,
  primaryBtnColor: COLORS.white,
  secondaryBtnColor: COLORS.white,
}

*/
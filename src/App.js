import React from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

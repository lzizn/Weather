import React from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Weather from './components/Weather';

import GlobalStyle from './styles/global';

import { WeatherContextProvider } from './contexts/WeatherContext';

export default function App(): JSX.Element {
  return (
    <>
      <WeatherContextProvider>
        <Header />
        <Container>
          <Weather />
        </Container>
      </WeatherContextProvider>
      <GlobalStyle />
    </>
  );
}

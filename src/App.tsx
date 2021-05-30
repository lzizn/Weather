import React from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Weather from './components/Weather';
import FavoriteCities from './components/FavoriteCities';

import GlobalStyle from './styles/global';

import { WeatherContextProvider } from './contexts/WeatherContext';
import { FavoriteCitiesContextProvider } from './contexts/FavoriteCitiesContext';

export default function App(): JSX.Element {
  return (
    <>
      <WeatherContextProvider>
        <FavoriteCitiesContextProvider>
          <Header />
          <Container>
            <Weather />
            <FavoriteCities />
          </Container>
        </FavoriteCitiesContextProvider>
      </WeatherContextProvider>
      <GlobalStyle />
    </>
  );
}

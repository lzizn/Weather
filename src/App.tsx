import React from 'react';
import { ToastContainer } from 'react-toastify';

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
          <Container>
            <Header />
            <Weather />
            <FavoriteCities />
          </Container>
        </FavoriteCitiesContextProvider>
      </WeatherContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
    </>
  );
}

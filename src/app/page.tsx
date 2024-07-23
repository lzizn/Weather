'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '@/components/Header';
import Weather from '@/components/Weather';
import Container from '@/components/Container';
import FavoriteCities from '@/components/FavoriteCities';

import { WeatherContextProvider } from '@/contexts/WeatherContext';
import { FavoriteCitiesContextProvider } from '@/contexts/FavoriteCitiesContext';

import GlobalStyle from '../styles/global';

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
      <GlobalStyle />
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
    </>
  );
}


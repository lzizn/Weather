'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Header, Weather, AppContainer, FavoriteCities } from '@/components';

import {
  WeatherContextProvider,
  FavoriteCitiesContextProvider,
} from '@/contexts';

import GlobalStyle from '../styles/global';

export default function App() {
  return (
    <>
      <WeatherContextProvider>
        <FavoriteCitiesContextProvider>
          <AppContainer>
            <Header />
            <Weather />
            <FavoriteCities />
          </AppContainer>
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


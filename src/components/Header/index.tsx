import React, { useContext, useEffect, useState } from 'react';

import SearchCity from './SearchCity';
import { Header } from './styles';

import { WeatherContext } from '../../contexts/WeatherContext';

export default function HeaderComponent(): JSX.Element {
  const { updateWeatherData } = useContext(WeatherContext);

  async function handleUpdateWeatherData(city: string) {
    if (updateWeatherData) {
      await updateWeatherData(city);
    }
  }

  return (
    <Header>
      <SearchCity handleUpdateWeatherData={handleUpdateWeatherData} />
    </Header>
  );
}

import React, { useContext } from 'react';

import SearchCity from './SearchCity';
import { Header } from './styles';

import { WeatherContext } from '../../contexts/WeatherContext';

export default function HeaderComponent(): JSX.Element | null {
  const { updateWeatherData, isLoading } = useContext(WeatherContext);

  async function handleUpdateWeatherData(cityName: string) {
    if (updateWeatherData) {
      await updateWeatherData({ cityName });
    }
  }

  if (isLoading) {
    return null;
  }

  return (
    <Header>
      <SearchCity handleUpdateWeatherData={handleUpdateWeatherData} />
    </Header>
  );
}

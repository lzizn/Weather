import React, { useContext, useState } from 'react';

import SearchCity from '../SearchCity';
import { Header } from './styles';

import { WeatherContext } from '../../contexts/WeatherContext';

export default function HeaderComponent(): JSX.Element {
  const [city, setCity] = useState('');

  const { updateWeatherData } = useContext(WeatherContext);

  async function handleUpdateWeatherData() {
    if (updateWeatherData) {
      await updateWeatherData(city);
    }
  }

  return (
    <Header>
      <SearchCity
        value={city}
        setValue={setCity}
        onClick={handleUpdateWeatherData}
      />
    </Header>
  );
}

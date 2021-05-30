import React from 'react';

import CurrentWeather from './CurrentWeather';
import NextDaysForecast from './NextDaysForecast';

import { WeatherWrapper } from './style';

export default function Weather(): JSX.Element {
  return (
    <WeatherWrapper>
      <CurrentWeather />
      <NextDaysForecast />
    </WeatherWrapper>
  );
}

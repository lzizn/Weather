import React, { useContext } from 'react';
import NextDaysCard from '../NextDaysCard';

import { NextDaysForecastWrapper } from './styles';

import { WeatherContext } from '../../../contexts/WeatherContext';

export default function NextDaysForecast(): JSX.Element {
  const { weatherData } = useContext(WeatherContext);

  return (
    <NextDaysForecastWrapper>
      {weatherData.map(({ dt, main, weather }) => {
        return (
          <NextDaysCard
            key={dt}
            timestamp={dt}
            temp={main.temp}
            temp_max={main.temp_max}
            temp_min={main.temp_min}
            humidity={main.humidity}
            pressure={main.pressure}
            icon={weather[0].icon}
          />
        );
      })}
    </NextDaysForecastWrapper>
  );
}


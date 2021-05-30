import React, { useContext } from 'react';
import NextDaysCard from '../NextDaysCard';

import { NextDaysForecastWrapper } from './styles';

import { WeatherContext } from '../../../contexts/WeatherContext';

export default function NextDaysForecast(): JSX.Element {
  const { weatherData } = useContext(WeatherContext);

  return (
    <NextDaysForecastWrapper>
      {weatherData?.daily.map((day) => {
        return (
          <NextDaysCard
            key={day.dt}
            timestamp={day.dt}
            temperature={day.temp.day}
            max={day.temp.max}
            min={day.temp.min}
            humidity={day.humidity}
            pressure={day.pressure}
            icon={day.weather[0].icon}
          />
        );
      })}
    </NextDaysForecastWrapper>
  );
}

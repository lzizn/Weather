import { useContext } from 'react';

import { WeatherContext } from '@/contexts';

import { NextDayCard } from '../NextDayCard';
import { NextDaysForecastWrapper } from './styles';

export function NextDaysForecast() {
  const { weatherData } = useContext(WeatherContext);

  // * skip first day, because it is already on weatherData.current, displayed by "CurrentWeather"
  const forecasts = weatherData.daily.slice(1);

  return (
    <NextDaysForecastWrapper>
      {forecasts.map((dailyForecast) => (
        <NextDayCard key={dailyForecast.dt} {...dailyForecast} />
      ))}
    </NextDaysForecastWrapper>
  );
}


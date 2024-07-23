import { useContext } from 'react';

import { WeatherContext } from '@/contexts';

import { Container } from '../Container';
import { CurrentWeather } from './CurrentWeather';
import { NextDaysForecast } from './NextDaysForecast';

export function Weather() {
  const { isLoading } = useContext(WeatherContext);

  if (isLoading) return null;

  return (
    <Container flexColumn={false}>
      <CurrentWeather />
      <NextDaysForecast />
    </Container>
  );
}


import React from 'react';

import { Container } from '../Container';
import CurrentWeather from './CurrentWeather';
import NextDaysForecast from './NextDaysForecast';

export default function Weather(): JSX.Element {
  return (
    <Container flexColumn={false}>
      <CurrentWeather />
      <NextDaysForecast />
    </Container>
  );
}

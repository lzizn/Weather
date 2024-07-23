import React, { useContext } from 'react';

import { WeatherContext } from '@/contexts/WeatherContext';

import { Container } from '../Container';
import Loading from '../Loading';

import CurrentWeather from './CurrentWeather';
import NextDaysForecast from './NextDaysForecast';

export default function Weather(): JSX.Element {
  const { isLoading } = useContext(WeatherContext);

  let content: JSX.Element;

  if (isLoading) {
    content = <Loading />;
  } else {
    content = (
      <>
        <CurrentWeather />
        <NextDaysForecast />
      </>
    );
  }

  return <Container flexColumn={false}>{content}</Container>;
}


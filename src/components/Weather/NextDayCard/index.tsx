import React from 'react';

import { getFormattedDate } from '@/lib';
import type { WeatherDailyForecast } from '@/types';

import { WeatherIcon } from '../WeatherIcon';
import { CurrentDate } from '../CurrentWeather/styles';
import { PressureAndHumidity } from '../PressureAndHumidity';

import { CardContainer, Main } from './styles';

export function NextDayCard(props: WeatherDailyForecast) {
  const { dt, temp, humidity, pressure, weather } = props;

  return (
    <CardContainer>
      <CurrentDate>{getFormattedDate(dt)}</CurrentDate>
      <Main>
        <WeatherIcon icon={weather[0].icon} />
        <div>
          <h1>{Math.round(temp.day)}° C</h1>
          <h3>
            {Math.round(temp.min)}° C/{Math.round(temp.max)}° C
          </h3>
        </div>
      </Main>
      <PressureAndHumidity
        pressure={pressure}
        humidity={humidity}
        size="small"
      />
    </CardContainer>
  );
}


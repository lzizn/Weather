import React from 'react';
import WeatherIcon from '../WeatherIcon';
import PressureAndHumidity from '../PressureAndHumidity';

import { CardContainer, Main } from './styles';
import { CurrentDate } from '../CurrentWeather/styles';

import getFormattedDate from '../../../lib/getFormattedDate';

type CardData = {
  timestamp: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure: number;
  icon: string;
};

export default function NextDaysCard({
  timestamp,
  temp,
  temp_max,
  temp_min,
  humidity,
  pressure,
  icon,
}: CardData): JSX.Element {
  return (
    <CardContainer>
      <CurrentDate>{getFormattedDate(timestamp)}</CurrentDate>
      <Main>
        <WeatherIcon icon={icon} />
        <div>
          <h1>{Math.round(temp)}° C</h1>
          <h3>
            {Math.round(temp_min)}° C/{Math.round(temp_max)}° C
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


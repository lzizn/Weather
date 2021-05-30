import React from 'react';
import getFormattedData from '../../../lib/getFormattedData';

import WeatherIcon from '../WeatherIcon';
import PressureAndHumidity from '../PressureAndHumidity';

import { CardContainer, Main } from './styles';

type CardData = {
  timestamp: string;
  temperature: string;
  max: string;
  min: string;
  humidity: string;
  pressure: string;
  icon: string;
};

export default function NextDaysCard({
  timestamp,
  temperature,
  max,
  min,
  humidity,
  pressure,
  icon,
}: CardData): JSX.Element {
  return (
    <CardContainer>
      <span>{getFormattedData(timestamp)}</span>
      <Main>
        <WeatherIcon icon={icon} />
        <div>
          <h1>{Math.round(Number(temperature))}° C</h1>
          <h3>
            {Math.round(Number(min))}° C/{Math.round(Number(max))}° C
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

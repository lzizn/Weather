import React, { useContext } from 'react';

import getFormattedData from '../../../lib/getFormattedData';

import { WeatherContext } from '../../../contexts/WeatherContext';

import PressureAndHumidity from '../PressureAndHumidity';
import WeatherIcon from '../WeatherIcon';

import {
  CurrentDate,
  CurrentWeatherContainer,
  MaxAndMinTemp,
  TemperatureAndImageWrapper,
} from './styles';

export default function CurrentWeather(): JSX.Element {
  const { weatherData, coordinates } = useContext(WeatherContext);

  const data = weatherData?.current;

  const formattedWeatherDescriptionText = () =>
    data?.weather[0].description
      .split(' ')
      .map(
        (description) =>
          `${description.charAt(0).toUpperCase()}${description.slice(1)} `,
      );

  return (
    <CurrentWeatherContainer>
      <CurrentDate>{getFormattedData(data?.dt)}</CurrentDate>

      <h1>
        {coordinates?.name}, {coordinates?.country_code}
      </h1>

      <h3>{formattedWeatherDescriptionText()}</h3>

      <TemperatureAndImageWrapper>
        <h1>{Math.round(data?.temp)}° C</h1>
        <WeatherIcon icon={data?.weather[0].icon} />
      </TemperatureAndImageWrapper>

      <MaxAndMinTemp>
        {Math.round(weatherData?.daily[0].temp?.min)}° C/
        {Math.round(weatherData?.daily[0].temp?.max)}° C
      </MaxAndMinTemp>

      <PressureAndHumidity
        pressure={data?.pressure}
        humidity={data?.humidity}
        size="large"
      />
    </CurrentWeatherContainer>
  );
}

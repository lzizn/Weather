import React, { useContext } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import PressureAndHumidity from '../PressureAndHumidity';
import WeatherIcon from '../WeatherIcon';

import { WeatherContext } from '../../../contexts/WeatherContext';
import { FavoriteCitiesContext } from '../../../contexts/FavoriteCitiesContext';

import getFormattedDate from '../../../lib/getFormattedDate';

import {
  CurrentDate,
  CurrentWeatherContainer,
  MaxAndMinTemp,
  TemperatureAndImageWrapper,
} from './styles';

export default function CurrentWeather(): JSX.Element {
  const { weatherData, currentCityCoords } = useContext(WeatherContext);
  const { isFavorite, handleClickAddOrRemoveFavCity } = useContext(
    FavoriteCitiesContext,
  );
  const data = weatherData?.current;

  const formattedWeatherDescriptionText = () =>
    data?.weather[0].description
      .split(' ')
      .map(
        (description) =>
          `${description.charAt(0).toUpperCase()}${description.slice(1)} `,
      );

  const Heart = () => {
    if (isFavorite) {
      return (
        <AiFillHeart
          size={25}
          onClick={() =>
            handleClickAddOrRemoveFavCity && handleClickAddOrRemoveFavCity()
          }
        />
      );
    }
    return (
      <AiOutlineHeart
        size={25}
        onClick={() =>
          handleClickAddOrRemoveFavCity && handleClickAddOrRemoveFavCity()
        }
      />
    );
  };

  return (
    <CurrentWeatherContainer>
      <CurrentDate>{getFormattedDate(data?.dt)}</CurrentDate>
      <div>
        <h1>
          {currentCityCoords?.county}, {currentCityCoords?.country_code}
        </h1>
        <Heart />
      </div>

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

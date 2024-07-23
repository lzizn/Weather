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
  const currentWeather = weatherData[0] || {};

  const formattedWeatherDescriptionText = () =>
    currentWeather.weather[0].description
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
      <CurrentDate>{getFormattedDate(currentWeather?.dt)}</CurrentDate>
      <div>
        <h1>
          {currentCityCoords?.county || currentCityCoords?.region},{' '}
          {currentCityCoords?.country_code}
        </h1>
        <Heart />
      </div>

      <h3>{formattedWeatherDescriptionText()}</h3>

      <TemperatureAndImageWrapper>
        <h1>{Math.round(currentWeather.main.temp)}° C</h1>
        <WeatherIcon icon={currentWeather?.weather[0].icon} />
      </TemperatureAndImageWrapper>

      <MaxAndMinTemp>
        {Math.round(currentWeather.main.temp_min)}° C/
        {Math.round(currentWeather.main.temp_min)}° C
      </MaxAndMinTemp>

      <PressureAndHumidity
        pressure={currentWeather.main.pressure}
        humidity={currentWeather.main.humidity}
        size="large"
      />
    </CurrentWeatherContainer>
  );
}


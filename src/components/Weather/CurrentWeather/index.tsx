import { useContext } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { WeatherIcon } from '../WeatherIcon';
import { PressureAndHumidity } from '../PressureAndHumidity';

import { getCityName, getFormattedDate } from '@/lib';
import { WeatherContext, FavoriteCitiesContext } from '@/contexts';

import {
  CurrentDate,
  MaxAndMinTemp,
  CurrentWeatherContainer,
  TemperatureAndImageWrapper,
} from './styles';
import type { Coordinates, FavoriteCity } from '@/types';

export function CurrentWeather(): JSX.Element {
  const { weatherData, currentCityCoords } = useContext(WeatherContext);
  const { isFavorite, handleClickFavoriteButton } = useContext(
    FavoriteCitiesContext,
  );

  const currentWeather = weatherData.current;

  const weatherDescriptionText = currentWeather.weather[0].description
    .split(' ')
    .map(
      (description) =>
        `${description.charAt(0).toUpperCase()}${description.slice(1)} `,
    )
    .join(' ');

  return (
    <CurrentWeatherContainer>
      <CurrentDate>{getFormattedDate(currentWeather.dt)}</CurrentDate>
      <div>
        <h1>{getCityName(currentCityCoords as FavoriteCity)}</h1>

        {isFavorite ? (
          <AiFillHeart size={25} onClick={handleClickFavoriteButton} />
        ) : (
          <AiOutlineHeart size={25} onClick={handleClickFavoriteButton} />
        )}
      </div>

      <h3>{weatherDescriptionText}</h3>

      <TemperatureAndImageWrapper>
        <h1>{Math.round(currentWeather.temp)}° C</h1>
        <WeatherIcon icon={currentWeather?.weather[0].icon} />
      </TemperatureAndImageWrapper>

      <MaxAndMinTemp>
        {Math.round(weatherData.daily[0].temp.min)}° C/
        {Math.round(weatherData.daily[0].temp.max)}° C
      </MaxAndMinTemp>

      <PressureAndHumidity
        pressure={currentWeather.pressure}
        humidity={currentWeather.humidity}
        size="large"
      />
    </CurrentWeatherContainer>
  );
}


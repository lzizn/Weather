import React, { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';

import { FavoriteCitiesContext } from '../../../contexts/FavoriteCitiesContext';
import { WeatherContext } from '../../../contexts/WeatherContext';

import FavoriteCity from '../../../types/FavoriteCity';

import { FavCityCardWrapper, FavCityName, RemoveFavCity } from './styles';

export default function FavoriteCityCard({
  city,
}: {
  city: FavoriteCity;
}): JSX.Element {
  const { removeFavoriteCity } = useContext(FavoriteCitiesContext);
  const { updateWeatherData } = useContext(WeatherContext);

  function handleUpdateWeather() {
    if (updateWeatherData) {
      updateWeatherData({ city });
    }
  }

  function handleRemoveFavoriteCity() {
    if (removeFavoriteCity) {
      removeFavoriteCity(city);
    }
  }

  return (
    <FavCityCardWrapper>
      <FavCityName onClick={handleUpdateWeather}>
        {city?.county || city?.name}
      </FavCityName>
      <RemoveFavCity onClick={handleRemoveFavoriteCity}>
        <FiTrash size="1rem" />
      </RemoveFavCity>
    </FavCityCardWrapper>
  );
}

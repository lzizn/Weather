import { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';

import type { FavoriteCity } from '@/types';
import { WeatherContext, FavoriteCitiesContext } from '@/contexts';

import { FavCityCardWrapper, FavCityName, RemoveFavCity } from './styles';

interface FavoriteCityCardProps {
  city: FavoriteCity;
}

export function FavoriteCityCard({ city }: FavoriteCityCardProps) {
  const { updateWeatherData } = useContext(WeatherContext);
  const { removeFavoriteCity } = useContext(FavoriteCitiesContext);

  const handleUpdateWeather = () => updateWeatherData(city);
  const handleRemoveFavoriteCity = () => removeFavoriteCity(city);

  return (
    <FavCityCardWrapper>
      <FavCityName onClick={handleUpdateWeather}>
        {city.name || city.county}
      </FavCityName>
      <RemoveFavCity onClick={handleRemoveFavoriteCity}>
        <FiTrash size="1rem" />
      </RemoveFavCity>
    </FavCityCardWrapper>
  );
}


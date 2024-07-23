'use client';

import { useContext, createContext, useState, useEffect } from 'react';

import type { FavoriteCity } from '@/types';

import { WeatherContext } from './WeatherContext';

interface FavoritiesCitiesContextType {
  isFavorite: boolean;
  favoriteCities: FavoriteCity[];
  setFavoriteCities: React.Dispatch<React.SetStateAction<FavoriteCity[]>>;
  handleClickFavoriteButton: () => void;
  removeFavoriteCity: (city: FavoriteCity) => void;
}

export const FavoriteCitiesContext = createContext<FavoritiesCitiesContextType>(
  {} as FavoritiesCitiesContextType,
);

export function FavoriteCitiesContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const { currentCityCoords } = useContext(WeatherContext);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favoriteCities, setFavoriteCities] = useState<FavoriteCity[]>(() => {
    const cities = localStorage.getItem('@favoriteCities');
    if (cities) {
      return JSON.parse(cities);
    }

    return [];
  });

  useEffect(() => {
    // * useEffect responsible for saving new changes of favoritesCities to localStorage
    const currentStoredCities = localStorage.getItem('@favoriteCities');
    const maybeNewCities = JSON.stringify(favoriteCities);

    if (maybeNewCities !== currentStoredCities) {
      localStorage.setItem('@favoriteCities', maybeNewCities);
    }
  }, [favoriteCities]);

  useEffect(() => {
    // * useEffect responsible to check whether the current city is a favorite city or not

    if (!currentCityCoords) {
      setIsFavorite(false);
      return;
    }

    const { name, county } = currentCityCoords;

    const maybeCurrentIsFavorite = favoriteCities?.some(
      (city) => city.county === county && city.name === name,
    );

    setIsFavorite(maybeCurrentIsFavorite);
  }, [currentCityCoords, favoriteCities]);

  function handleClickFavoriteButton() {
    if (!currentCityCoords) return;

    if (isFavorite) return removeFavoriteCity(currentCityCoords);

    return addCityToFavorite(currentCityCoords);
  }

  function addCityToFavorite(city: FavoriteCity) {
    setFavoriteCities((prevState) => [city, ...prevState]);
  }

  function removeFavoriteCity(city: FavoriteCity) {
    const { county, name } = city;

    setFavoriteCities((prevState) =>
      prevState.filter(
        (favCity) => favCity.county !== county || favCity.name !== name,
      ),
    );
  }

  return (
    <FavoriteCitiesContext.Provider
      value={{
        isFavorite,
        favoriteCities,
        setFavoriteCities,
        removeFavoriteCity,
        handleClickFavoriteButton: handleClickFavoriteButton || (() => {}),
      }}
    >
      {children}
    </FavoriteCitiesContext.Provider>
  );
}


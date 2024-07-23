'use client';

import React, { useContext, createContext, useState, useEffect } from 'react';

import type FavoriteCity from '../types/FavoriteCity';

import { WeatherContext } from './WeatherContext';

interface FavoritiesCitiesContextType {
  favoriteCities?: FavoriteCity[];
  setFavoriteCities?: React.Dispatch<React.SetStateAction<FavoriteCity[]>>;
  isFavorite?: boolean;
  handleClickAddOrRemoveFavCity?: () => void;
  removeFavoriteCity?: (city: FavoriteCity) => void;
}

export const FavoriteCitiesContext = createContext<FavoritiesCitiesContextType>(
  {},
);

export function FavoriteCitiesContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { currentCityCoords } = useContext(WeatherContext);

  const [favoriteCities, setFavoriteCities] = useState<FavoriteCity[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const cities = localStorage.getItem('@favoriteCities');
    if (cities) {
      setFavoriteCities(JSON.parse(cities));
    }
  }, []);

  useEffect(() => {
    /*
     * useEffect responsible for saving new changes
     * of favoritesCities to localStorage
     */

    if (favoriteCities) {
      localStorage.setItem('@favoriteCities', JSON.stringify(favoriteCities));
    }
  }, [favoriteCities]);

  useEffect(() => {
    /*
     * useEffect responsible to check whether the current city is
     * a favorite city or not
     */

    let aux_isFavorite = 0;
    favoriteCities?.forEach((city) => {
      if (
        city.county === currentCityCoords?.county &&
        city.country_code === currentCityCoords?.country_code &&
        city.region === currentCityCoords?.region
      ) {
        setIsFavorite(true);
        aux_isFavorite = 1;
      }
    });
    if (!aux_isFavorite) {
      setIsFavorite(false);
    }
  }, [currentCityCoords, favoriteCities]);

  function handleClickAddOrRemoveFavCity() {
    if (!isFavorite) {
      return addCurrentCityToFavorite();
    }
    return removeCurrentCityFromFavorite();
  }

  function addCurrentCityToFavorite() {
    setFavoriteCities((prevState) => [
      {
        latitude: currentCityCoords?.latitude,
        longitude: currentCityCoords?.longitude,
        county: currentCityCoords?.county,
        country_code: currentCityCoords?.country_code,
        region: currentCityCoords?.region,
        name: currentCityCoords?.name,
      },
      ...prevState!,
    ]);
  }

  function removeCurrentCityFromFavorite() {
    setFavoriteCities((prevState) =>
      prevState?.filter(
        (city) =>
          city.county !== currentCityCoords?.county ||
          city.country_code !== currentCityCoords?.country_code ||
          city.region !== currentCityCoords?.region ||
          city.name !== currentCityCoords?.name,
      ),
    );
  }

  function removeFavoriteCity(city: FavoriteCity) {
    setFavoriteCities((prevState) =>
      prevState?.filter(
        (favCities) =>
          favCities.county !== city?.county ||
          favCities.country_code !== city?.country_code ||
          favCities.region !== city?.region ||
          favCities.name !== city?.name,
      ),
    );
  }

  return (
    <FavoriteCitiesContext.Provider
      value={{
        favoriteCities,
        setFavoriteCities,
        isFavorite,
        handleClickAddOrRemoveFavCity,
        removeFavoriteCity,
      }}
    >
      {children}
    </FavoriteCitiesContext.Provider>
  );
}


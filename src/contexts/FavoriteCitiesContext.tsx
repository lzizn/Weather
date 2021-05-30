import React, { useContext, createContext, useState, useEffect } from 'react';
import removeAccents from 'remove-accents';

import Coordinates from '../types/Coordinates';
import FavoriteCity from '../types/FavoriteCities';

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
  const { coordinates } = useContext(WeatherContext);

  const [favoriteCities, setFavoriteCities] = useState<FavoriteCity[]>([]);
  const [formattedCurrentCityCoords, setFormattedCurrentCityCoords] =
    useState<Coordinates>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const cities = localStorage.getItem('@favoriteCities');
    if (cities) {
      setFavoriteCities(JSON.parse(cities));
    }
  }, []);

  useEffect(() => {
    /*
     *  useEffect responsible to remove accents from string
     * data of current city.
     *  We must remove accents because 'Vitoria, ES, BRA'
     * and 'Vitória, ES, BRA' are the same city.
     */

    setFormattedCurrentCityCoords({
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      county: removeAccents(coordinates?.county || ''),
      country_code: removeAccents(coordinates?.country_code || ''),
      region: removeAccents(coordinates?.region || ''),
      name: removeAccents(coordinates?.name || ''),
    });
  }, [coordinates, coordinates?.latitude]);

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
        (city.county === formattedCurrentCityCoords?.county ||
          city.name === formattedCurrentCityCoords?.name) &&
        city.country_code === formattedCurrentCityCoords?.country_code &&
        city.region === formattedCurrentCityCoords?.region
      ) {
        setIsFavorite(true);
        aux_isFavorite = 1;
      }
    });
    if (!aux_isFavorite) {
      setIsFavorite(false);
    }
  }, [coordinates, formattedCurrentCityCoords, favoriteCities]);

  function handleClickAddOrRemoveFavCity() {
    if (!isFavorite) {
      return addCurrentCityToFavorite();
    }
    return removeCurrentCityFromFavorite();
  }

  function addCurrentCityToFavorite() {
    setFavoriteCities((prevState) => [
      {
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        county: coordinates?.county,
        country_code: coordinates?.country_code,
        region: coordinates?.region,
        name: coordinates?.name,
      },
      ...prevState!,
    ]);
  }

  function removeCurrentCityFromFavorite() {
    setFavoriteCities((prevState) =>
      prevState?.filter(
        (city) =>
          city.county !== coordinates?.county ||
          city.country_code !== coordinates?.country_code ||
          city.region !== coordinates?.region ||
          city.name !== coordinates?.name,
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

import React, { createContext, ReactNode, useEffect, useState } from 'react';

import Loading from '../components/Loading';

import WeatherData from '../types/WeatherData';
import Coordinates from '../types/Coordinates';
import FavoriteCity from '../types/FavoriteCities';

import getLatLong from '../lib/getLatLong';
import getWeatherData from '../lib/getWeatherData';
interface WeatherContextType {
  coordinates?: Coordinates;
  setCoordinates?: React.Dispatch<React.SetStateAction<Coordinates>>;
  updateWeatherData?: (place: string, city?: FavoriteCity) => Promise<void>;
  weatherData?: WeatherData;
}

export const WeatherContext = createContext<WeatherContextType>({});
export function WeatherContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  useEffect(() => {
    updateWeatherData('Blumenau,Santa Catarina,SC');
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [coordinates, setCoordinates] = useState<Coordinates>();

  async function updateWeatherData(place = '', city?: FavoriteCity) {
    setLoading((prevState) => !prevState);

    let newCityCoordinates: FavoriteCity | undefined | void = city;

    if (!city?.latitude || !city.longitude) {
      newCityCoordinates = await getLatLong(place);
    }

    if (
      newCityCoordinates &&
      newCityCoordinates.latitude &&
      newCityCoordinates.longitude
    ) {
      setCoordinates(newCityCoordinates);
      const data = await getWeatherData(
        newCityCoordinates.latitude,
        newCityCoordinates.longitude,
      );
      setWeatherData(data);
    }
    setLoading((prevState) => !prevState);
  }

  return (
    <WeatherContext.Provider
      value={{
        updateWeatherData,
        weatherData,
        coordinates,
      }}
    >
      {isLoading || !weatherData ? <Loading /> : children}
    </WeatherContext.Provider>
  );
}

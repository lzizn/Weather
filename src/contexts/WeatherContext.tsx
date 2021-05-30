import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loading from '../components/Loading';

import WeatherData from '../types/WeatherData';
import Coordinates from '../types/Coordinates';
import FavoriteCity from '../types/FavoriteCities';

import getLatLong from '../lib/getLatLong';
import getWeatherData from '../lib/getWeatherData';

interface WeatherContextType {
  coordinates?: Coordinates;
  setCoordinates?: React.Dispatch<React.SetStateAction<Coordinates>>;
  updateWeatherData?: (
    place: string,
    city?: FavoriteCity,
  ) => Promise<void | React.ReactText>;
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

  function showError(err: Error) {
    setLoading((prevState) => !prevState);
    toast.error(`${err}`);
  }

  async function updateWeatherData(place = '', city?: FavoriteCity) {
    setLoading((prevState) => !prevState);

    let newCityCoordinates: FavoriteCity | undefined = city;

    if (!city?.latitude || !city.longitude) {
      newCityCoordinates = await getLatLong(place);

      if (newCityCoordinates instanceof Error) {
        showError(newCityCoordinates);
        return;
      }
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

      if (data instanceof Error) {
        showError(data);
        return;
      }
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

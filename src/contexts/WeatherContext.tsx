import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loading from '../components/Loading';

import WeatherData from '../types/WeatherData';
import Coordinates from '../types/Coordinates';
import FavoriteCity from '../types/FavoriteCities';

import getLatLong from '../lib/getLatLong';
import getWeatherData from '../lib/getWeatherData';

interface WeatherContextType {
  currentCityCoords?: Coordinates;
  updateWeatherData?: (
    place: string,
    city?: Coordinates,
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
    updateWeatherData('Blumenau,Santa Catarina,BRA');
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [currentCityCoords, setCurrentCityCoords] = useState<Coordinates>();

  function showError(err: Error) {
    setLoading((prevState) => !prevState);
    toast.error(`${err}`);
  }

  async function updateWeatherData(place = '', city?: Coordinates) {
    setLoading((prevState) => !prevState);

    let newCityCoords: Coordinates | undefined = city;

    if (!city?.latitude || !city.longitude) {
      newCityCoords = await getLatLong(place);

      if (newCityCoords instanceof Error) {
        showError(newCityCoords);
        return;
      }
    }

    if (newCityCoords && newCityCoords.latitude && newCityCoords.longitude) {
      setCurrentCityCoords(newCityCoords);
      const data = await getWeatherData(
        newCityCoords.latitude,
        newCityCoords.longitude,
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
        currentCityCoords,
      }}
    >
      {isLoading || !weatherData ? <Loading /> : children}
    </WeatherContext.Provider>
  );
}

import React, { createContext, ReactNode, useEffect, useState } from 'react';

import WeatherData from '../types/WeatherData';
import getWeatherData from '../lib/getWeatherData';
import Coordinates from '../types/Coordinates';
import getLatLong from '../lib/getLatLong';
import Loading from '../components/Loading';

interface WeatherContextType {
  coordinates?: Coordinates;
  setCoordinates?: React.Dispatch<React.SetStateAction<Coordinates>>;
  updateWeatherData?: (place: string) => Promise<void>;
  weatherData?: WeatherData;
}

export const WeatherContext = createContext<WeatherContextType>({});
export function WeatherContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  useEffect(() => {
    updateWeatherData('Blumenau, Santa Catarina, SC');
  }, []);

  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [coordinates, setCoordinates] = useState<Coordinates>();

  async function updateWeatherData(place: string) {
    setLoading((prevState) => !prevState);
    const cityCoordinates = await getLatLong(place);
    if (
      cityCoordinates &&
      cityCoordinates.latitude &&
      cityCoordinates.longitude
    ) {
      setCoordinates(cityCoordinates);
      const data = await getWeatherData(
        cityCoordinates.latitude,
        cityCoordinates.longitude,
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

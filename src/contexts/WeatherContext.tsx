'use client';

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loading from '../components/Loading';

import { WeatherForecast } from '../types/WeatherData';
import Coordinates from '../types/Coordinates';
import FavoriteCity from '../types/FavoriteCity';

import getLatLong from '../lib/getLatLong';
import getWeatherData from '../lib/getWeatherData';

interface WeatherContextType {
  currentCityCoords?: Coordinates;
  updateWeatherData?: ({
    cityName,
    city,
  }: UpdateWeatherDataProps) => Promise<void>;
  isLoading?: boolean;
  weatherData: WeatherForecast[];
}

type UpdateWeatherDataProps = {
  cityName?: string;
  city?: FavoriteCity;
};

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType,
);
export function WeatherContextProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);
  const [currentCityCoords, setCurrentCityCoords] = useState<Coordinates>();

  const showError = (err: Error) => {
    setLoading((prevState) => !prevState);
    toast.error(`${err}`);
  };

  async function updateWeatherData({ cityName, city }: UpdateWeatherDataProps) {
    /*
     ? Update the weather data by fetching 2 APIS:
     * 1. GoogleGeocodingAPI to get Coordinates of city
     * 2. OpenweatherAPI (passing city coordinates) to get weather data
     *
     - If @param city:FavCity is provided, we only fetch OpenweatherAPI, because we already have the city coords data.
     - If @param cityName: string is provided and city isn't, we fetch GeocodingAPI, then OpenWeatherAPI
     *
     */

    // * If none of the params are provided, throw an error

    if (!city && !cityName) {
      showError(
        Error(
          'While updating weather: Must pass at least 1 param to call function',
        ),
      );
      return;
    }

    setLoading((prevState) => !prevState);

    let newCityCoords = city;

    if (!newCityCoords && cityName) {
      try {
        newCityCoords = await getLatLong(cityName);
      } catch (error: any) {
        showError(error);
        return;
      }
    }

    if (newCityCoords && newCityCoords.latitude && newCityCoords.longitude) {
      try {
        const data = await getWeatherData(
          newCityCoords.latitude,
          newCityCoords.longitude,
        );

        setCurrentCityCoords(newCityCoords);
        setWeatherData(data);
      } catch (error: any) {
        showError(error);
        return;
      }
    }
    setLoading((prevState) => !prevState);
  }

  useEffect(() => {
    // * Standard city
    updateWeatherData({ cityName: 'Blumenau,Santa Catarina,BRA' });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        updateWeatherData,
        weatherData,
        currentCityCoords,
        isLoading,
      }}
    >
      {!weatherData.length ? <Loading /> : children}
    </WeatherContext.Provider>
  );
}


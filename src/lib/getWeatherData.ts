import axios from 'axios';

import type {
  OpenWeatherResponse,
  WeatherForecast,
} from '../types/WeatherData';

import data from '@/mocks/weatherData.json';

export default async function getWeatherData(
  latitude: number,
  longitude: number,
): Promise<WeatherForecast[]> {
  try {
    // const { data } = await axios.get<OpenWeatherResponse>(
    //   `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`,
    // );

    /*
     * This API returns 7-day forecast, including the actual day (array 1st element),
     * so since there isn't a way to choose days, I had to hardcode it.
     *
     * Removing 1st and last day;
     */

    // data.daily.shift();
    // data.daily.pop();

    return data.list;
  } catch (error) {
    console.log({ error });
    throw Error('Error while collecting weather data.');
  }
}


import axios from 'axios';

import type { WeatherData } from '@/types';

export async function getWeatherData(lat: number, lng: number) {
  try {
    const { data } = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_KEY}`,
    );

    /*
     * This API returns 7-day forecast, including the actual day (array 1st element),
     * so since there isn't a way to choose days, I had to hardcode it.
     *
     * Removing 1st and last day;
     */

    // data.daily.shift();
    data.daily.pop();

    return data;
  } catch (error) {
    console.error('getWeatherData:', { error });
    throw Error('Error while collecting weather data.');
  }
}


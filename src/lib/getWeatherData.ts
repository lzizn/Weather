import axios from 'axios';
import WeatherData from '../types/WeatherData';

export default async function getWeatherData(
  latitude: string,
  longitude: string,
) {
  try {
    const data: WeatherData = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`,
      )
      .then((response) => response.data);

    /*
     * This API returns 7-day forecast, including the actual day (array 1st element),
     * so since there isn't a way to choose days, I had to hardcode it.
     *
     * Removing 1st and last day;
     */

    data.daily.shift();
    data.daily.pop();

    return data;
  } catch (error) {
    console.error(error);
    alert('Error while collecting weather data.');
  }
}

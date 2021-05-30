export default interface WeatherData {
  lat: string;
  lon: string;
  timezone: string;
  timezone_offset: string;
  current: GeneralWeatherDataFields;
  daily: GeneralWeatherDataFields[];
}

interface GeneralWeatherDataFields {
  dt: string;
  sunrise: string;
  sunset: string;
  temp: any;
  feels_like: string;
  pressure: string;
  humidity: string;
  dew_point: string;
  clouds: string;
  uvi: string;
  visiblity: string;
  wind_speed: string;
  wind_gust?: string;
  wind_deg: string;
  weather: {
    id: string;
    main: string;
    description: string;
    icon: string;
  }[];
}

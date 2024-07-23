export interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherCurrentForecast;
  daily: WeatherDailyForecast[];
}

export interface WeatherCurrentForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherUIInfo[];
}

export interface WeatherDailyForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: WeatherTemperature;
  feels_like: WeatherFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherUIInfo[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

export interface WeatherTemperature {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherUIInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}


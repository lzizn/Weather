export interface OpenWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherForecast[];
  city: CityInfo;
}

export interface WeatherForecast {
  dt: number;
  main: WeatherMainInfo;
  weather: WeatherUIInfo[];
  clouds: Clouds;
  wind: Wind;
  rain?: RainProbabilityInNext3Hours;

  dt_txt: string;
  visibility: number;
  pop: number;
}

export interface WeatherMainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherUIInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface RainProbabilityInNext3Hours {
  '3h': number;
}

export interface CityInfo {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}


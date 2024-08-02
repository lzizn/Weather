import axios from 'axios';

import { WeatherData } from '@/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url as string);

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (lat == null || lng == null) {
    return new Response(
      JSON.stringify({
        message: "Missing both or one required params: 'lat' and 'lng'",
      }),
      { status: 400 },
    );
  }

  const { data } = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.OPENWEATHER_KEY}`,
  );

  /*
   * This OpenWeatherAPI returns 7-day forecast, including the actual day (array 1st element),
   * so since there isn't a way to choose days, I had to hardcode it.
   *
   * Removing 1st and last day;
   */

  // data.daily.shift();
  data.daily.pop();

  return new Response(JSON.stringify(data), {
    status: 200,
    statusText: 'OK',
  });
}


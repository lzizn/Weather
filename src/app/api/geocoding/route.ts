import axios from 'axios';

import { GoogleGeocodingResponse } from '@/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url as string);

  const place = searchParams.get('place');

  if (place == null) {
    return new Response(
      JSON.stringify({ message: "Missing required param: 'place'" }),
      { status: 400 },
    );
  }

  const { data } = await axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${process.env.NEXT_PUBLIC_GEOCODING_KEY}`,
  );

  return new Response(JSON.stringify(data.results[0]), {
    status: 200,
    statusText: 'OK',
  });
}


import axios from 'axios';

import type { GoogleGeocodingInfo } from '@/types';

interface GoogleGeocodingResponse {
  results: GoogleGeocodingInfo[];
  status: string;
}

export async function getGeocodingInfo(
  place: string,
): Promise<GoogleGeocodingInfo> {
  if (place.length < 3) {
    throw Error('Must have at least 3 letters');
  }

  try {
    const formattedPlace = place.replaceAll(' ', '+').replaceAll(',', '+');

    const { data } = await axios.get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedPlace}&key=${process.env.NEXT_PUBLIC_GEOCODING_KEY}`,
    );

    return data.results[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}


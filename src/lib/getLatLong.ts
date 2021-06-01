import axios from 'axios';

import Coordinates from '../types/Coordinates';
import GoogleGeocodingResponse from '../types/GeocodingResponse';

export default async function getLatLong(place: string): Promise<Coordinates> {
  if (place.length < 3) {
    throw Error('Must have at least 3 letters');
  }

  const coordinates: Coordinates = {};
  const formattedPlace = place.replaceAll(' ', '+').replaceAll(',', '+');
  try {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedPlace}&key=${process.env.REACT_APP_GOOGLE_KEY}`,
      )
      .then((response) => {
        if (!response.data.results.length) {
          throw Error("Sorry. We couldn't find a city, try again");
        }
        const data: GoogleGeocodingResponse = response.data.results[0];

        coordinates.latitude = data.geometry.location.lat;
        coordinates.longitude = data.geometry.location.lng;

        data.address_components.forEach((address) => {
          if (
            address.types.includes('locality') ||
            address.types.includes('administrative_area_level_2')
          ) {
            coordinates.county = address.long_name;
          }
          if (address.types.includes('administrative_area_level_1')) {
            coordinates.region = address.long_name;
          }
          if (address.types.includes('country')) {
            coordinates.country_code = address.short_name;
          }
        });
      });
  } catch (error) {
    console.error(error);
    throw error;
  }

  return coordinates;
}

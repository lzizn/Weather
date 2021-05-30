import axios from 'axios';

import Coordinates from '../types/Coordinates';

type GoogleGeocodingResponse = {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  formatted_address: string;
  geometry: {
    location: {
      lat: string;
      lng: string;
    };
  };
};

export default async function getLatLong(
  place: string,
): Promise<Error | Coordinates> {
  if (place.length < 3) {
    return Error('Must have at least 3 letters');
  }

  let coordinates: Coordinates = {};
  const formattedPlace = place.replaceAll(' ', '+').replaceAll(',', '+');
  try {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedPlace}&key=${process.env.REACT_APP_GOOGLE_KEY}`,
      )
      .then((response: any) => {
        const data: GoogleGeocodingResponse = response.data.results[0];

        if (data.geometry.location.lat && data.geometry.location.lng) {
          coordinates.latitude = data.geometry.location.lat;
          coordinates.longitude = data.geometry.location.lng;
        } else {
          coordinates = new Error("Sorry. We couldn't find a city, try again");
        }

        data.address_components.forEach((address) => {
          if (address.types.includes('locality')) {
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
    return Error('Error while collecting coordinates data.');
  }

  return coordinates;
}

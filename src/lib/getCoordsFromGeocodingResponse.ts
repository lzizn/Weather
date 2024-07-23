import type { Coordinates, GoogleGeocodingInfo } from '@/types';

export function getCoordsFromGeocodingInfo({
  geometry,
  address_components,
}: GoogleGeocodingInfo) {
  const coordinates: Coordinates = {};

  const lat = geometry.location.lat as number | (() => number);
  const lng = geometry.location.lng as number | (() => number);

  coordinates.latitude = typeof lat === 'function' ? lat() : lat;
  coordinates.longitude = typeof lng === 'function' ? lng() : lng;

  address_components.forEach((address) => {
    const nameAddressTypes = ['locality', 'political'];
    if (nameAddressTypes.every((x) => address.types.includes(x))) {
      coordinates.name = address.long_name;
      return;
    }

    if (address.types.includes('administrative_area_level_2')) {
      coordinates.county = address.long_name.split('State of ')[1];
      return;
    }

    if (address.types.includes('administrative_area_level_1')) {
      coordinates.state = address.short_name;
      return;
    }

    if (address.types.includes('country')) {
      coordinates.country_code = address.short_name;
    }
  });

  return coordinates;
}


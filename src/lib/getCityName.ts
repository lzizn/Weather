import type { Coordinates } from '@/types';

export const getCityName = (city: Coordinates) => {
  const { name, country_code, county, state } = city;

  if (name) {
    return `${name} - ${state || county}, ${country_code}`;
  }

  return `${state || county} - ${country_code}`;
};


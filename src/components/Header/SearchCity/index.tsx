import { useContext } from 'react';

import Autocomplete from 'react-google-autocomplete';

import { WeatherContext } from '@/contexts';
import type { GoogleGeocodingInfo } from '@/types';
import { getCoordsFromGeocodingInfo } from '@/lib';

import { InputWrapper } from './styles';

export function SearchCity() {
  const { updateWeatherData } = useContext(WeatherContext);

  const handleSelectPlace = (geocodingInfo: GoogleGeocodingInfo) => {
    if (!geocodingInfo) return;

    const newPlaceCoords = getCoordsFromGeocodingInfo(geocodingInfo);

    updateWeatherData(newPlaceCoords);
  };

  return (
    <InputWrapper>
      <Autocomplete
        apiKey={process.env.NEXT_PUBLIC_GEOCODING_KEY}
        placeholder="Type a city"
        onPlaceSelected={handleSelectPlace}
      />
    </InputWrapper>
  );
}


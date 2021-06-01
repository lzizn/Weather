import React from 'react';

import Autocomplete from 'react-google-autocomplete';

import { InputWrapper } from './styles';

export default function SearchCity({
  handleUpdateWeatherData,
}: {
  handleUpdateWeatherData: (cityName: string) => void;
}): JSX.Element {
  function handleSelectPlace(place: any) {
    if (place?.formatted_address) {
      handleUpdateWeatherData(place.formatted_address);
    }

    /*
     * When user press 'Enter' instead of choosing a city, this param name is passed to place
     */

    if (place?.name) {
      handleUpdateWeatherData(place.name);
    }
  }

  return (
    <InputWrapper>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_KEY}
        placeholder="Type a city"
        onPlaceSelected={handleSelectPlace}
      />
    </InputWrapper>
  );
}

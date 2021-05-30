import React from 'react';

import Autocomplete from 'react-google-autocomplete';

import { InputWrapper } from './styles';

export default function SearchCity({
  handleUpdateWeatherData,
}: {
  handleUpdateWeatherData: (city: string) => void;
}): JSX.Element {
  return (
    <InputWrapper>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_KEY}
        placeholder="Type a city"
        style={{ width: '90%' }}
        onPlaceSelected={(place: any) => {
          console.log(place);
          handleUpdateWeatherData(place.formatted_address);
        }}
      />
    </InputWrapper>
  );
}

import React, { useState } from 'react';

import SearchCity from '../SearchCity';
import { Header } from './styles';

import getLatLong from '../../lib/getLatLong';

export default function HeaderComponent() {
  const [city, setCity] = useState('');

  async function handleClick() {
    console.log(await getLatLong(city));
  }

  return (
    <Header>
      <SearchCity value={city} setValue={setCity} onClick={handleClick} />
    </Header>
  );
}

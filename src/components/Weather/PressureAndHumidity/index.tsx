import React from 'react';
import { BiDroplet } from 'react-icons/bi';

import PressureIcon from '@/assets/PressureIcon.svg';

import { Item, PressureAndHumidtyWrapper } from './styles';

export default function PressureAndHumidity({
  pressure,
  humidity,
  size,
}: {
  pressure: number | undefined;
  humidity: number | undefined;
  size: string;
}): JSX.Element {
  return (
    <PressureAndHumidtyWrapper>
      <Item size={size}>
        <BiDroplet />
        <span>{humidity}%</span>
      </Item>
      <Item size={size}>
        <img src={PressureIcon} alt="Pressure icon" />
        <span>{pressure}Pa</span>
      </Item>
    </PressureAndHumidtyWrapper>
  );
}


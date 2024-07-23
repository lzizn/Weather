import React from 'react';
import Image from 'next/image';
import { BiDroplet } from 'react-icons/bi';

import PressureIcon from '@/assets/PressureIcon.svg';

import type { WeatherDailyForecast } from '@/types';
import { Item, PressureAndHumidtyWrapper } from './styles';

type PressureAndHumidityProps = Pick<
  WeatherDailyForecast,
  'pressure' | 'humidity'
> & {
  size: 'small' | 'large';
};

export function PressureAndHumidity(props: PressureAndHumidityProps) {
  const { pressure, humidity, size } = props;

  return (
    <PressureAndHumidtyWrapper>
      <Item size={size}>
        <BiDroplet />
        <span>{humidity}%</span>
      </Item>
      <Item size={size}>
        <Image src={PressureIcon} alt="Pressure icon" />
        <span>{pressure}Pa</span>
      </Item>
    </PressureAndHumidtyWrapper>
  );
}


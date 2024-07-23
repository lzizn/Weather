import { useContext } from 'react';

import { WeatherContext } from '@/contexts/WeatherContext';

import { SearchCity } from './SearchCity';

import * as S from './styles';

export function Header() {
  const { isLoading } = useContext(WeatherContext);

  if (isLoading) return null;

  return (
    <S.Header>
      <SearchCity />
    </S.Header>
  );
}


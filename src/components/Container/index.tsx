import React, { useContext } from 'react';

import { WeatherContext } from '@/contexts';
import * as S from './styles';

export function AppContainer({ children }: React.PropsWithChildren<{}>) {
  const { weatherData } = useContext(WeatherContext);

  return (
    <S.AppContainer icon={weatherData.current.weather[0].icon}>
      {children}
    </S.AppContainer>
  );
}

interface ContainerProps {
  flexColumn?: boolean;
}
export function Container(props: React.PropsWithChildren<ContainerProps>) {
  const { children, flexColumn = false } = props;

  return (
    <S.StyledContainer flexColumn={flexColumn}>{children}</S.StyledContainer>
  );
}


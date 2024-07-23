import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import { AppContainer, StyledContainer } from './styles';

export default function AppContainerComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { weatherData } = useContext(WeatherContext);

  return (
    <AppContainer icon={weatherData[0].weather[0].icon}>
      {children}
    </AppContainer>
  );
}

export function Container({
  children,
  flexColumn = false,
}: {
  children: React.ReactNode;
  flexColumn: boolean;
}): JSX.Element {
  return <StyledContainer flexColumn={flexColumn}>{children}</StyledContainer>;
}


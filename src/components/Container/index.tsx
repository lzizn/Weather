import React from 'react';

import { AppContainer, StyledContainer } from './styles';

export default function AppContainerComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <AppContainer>{children}</AppContainer>;
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

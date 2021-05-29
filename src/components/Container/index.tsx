import React from 'react';

import { Container } from './styles';

export default function ContainerComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Container>{children}</Container>;
}

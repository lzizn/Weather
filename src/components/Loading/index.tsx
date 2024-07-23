import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import { LoadingWrapper } from './styles';

export function Loading() {
  return (
    <LoadingWrapper>
      <TailSpin color="#154e61" />
    </LoadingWrapper>
  );
}


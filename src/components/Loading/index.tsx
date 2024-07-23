import React from 'react';
import { TailSpin } from 'react-loader-spinner';

import { LoadingWrapper } from './styles';

export default function Loading(): JSX.Element {
  return (
    <LoadingWrapper>
      <TailSpin color="#154e61" />
    </LoadingWrapper>
  );
}


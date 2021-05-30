import React from 'react';
import Loader from 'react-loader-spinner';
import { LoadingWrapper } from './styles';

export default function Loading(): JSX.Element {
  return (
    <LoadingWrapper>
      <Loader type="TailSpin" color="#154e61" />
    </LoadingWrapper>
  );
}

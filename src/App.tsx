import React from 'react';

import Container from './components/Container';
import Header from './components/Header';
import GlobalStory from './styles/global';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <h1>Hello world!</h1>
        <GlobalStory />
      </Container>
    </>
  );
}

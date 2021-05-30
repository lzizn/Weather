import React, { useContext } from 'react';
import { Container } from '../Container';
import FavoriteCityCard from './FavoriteCityCard';

import { FavoriteCitiesContext } from '../../contexts/FavoriteCitiesContext';

import { FavCityCardsContainer, Title, Text } from './styles';

export default function FavoriteCities(): JSX.Element {
  const { favoriteCities } = useContext(FavoriteCitiesContext);

  function FavoriteCitiesCards(): JSX.Element[] | JSX.Element {
    if (!favoriteCities?.length) {
      return <Text>Add a city to favorites</Text>;
    }
    return (
      <FavCityCardsContainer>
        {favoriteCities?.map((city) => (
          <FavoriteCityCard key={city.latitude} city={city} />
        ))}
      </FavCityCardsContainer>
    );
  }

  return (
    <Container flexColumn>
      <Title>Favorite Cities</Title>
      {FavoriteCitiesCards()}
    </Container>
  );
}

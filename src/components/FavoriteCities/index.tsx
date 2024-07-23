import { useContext } from 'react';

import { Container } from '../Container';

import { WeatherContext } from '@/contexts/WeatherContext';
import { FavoriteCitiesContext } from '@/contexts/FavoriteCitiesContext';

import { FavoriteCityCard } from './FavoriteCityCard';
import { FavCityCardsContainer, Title, Text } from './styles';

export function FavoriteCities() {
  const { isLoading } = useContext(WeatherContext);
  const { favoriteCities } = useContext(FavoriteCitiesContext);

  if (isLoading) return null;

  return (
    <Container flexColumn>
      <Title>Favorite Cities</Title>
      {favoriteCities.length === 0 ? (
        <Text>Add a city to favorites</Text>
      ) : (
        <FavCityCardsContainer>
          {favoriteCities?.map((city) => (
            <FavoriteCityCard key={city.latitude} city={city} />
          ))}
        </FavCityCardsContainer>
      )}
    </Container>
  );
}


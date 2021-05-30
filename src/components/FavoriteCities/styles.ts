import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  color: #000;
`;

export const Text = styled.span`
  text-align: center;
  font-size: 1.2rem;

  color: var(--black-02);
  margin: 1rem 0;
`;

export const FavCityCardsContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 1rem 0;

  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(2, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;

  @media (max-width: 400px) {
    width: auto;
  }
`;

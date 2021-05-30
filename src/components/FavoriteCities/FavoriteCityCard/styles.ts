import styled from 'styled-components';

export const FavCityCardWrapper = styled.div`
  width: 20rem;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  background: var(--gray-02);
  border-radius: 20px;
`;

export const FavCityName = styled.h1`
  flex: 1;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const RemoveFavCity = styled.div`
  display: grid;
  place-items: center;

  border-radius: 20px;
  padding: 0.4rem;
  background: var(--red);

  cursor: pointer;
`;

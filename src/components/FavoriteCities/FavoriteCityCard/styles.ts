import styled from 'styled-components';

export const FavCityCardWrapper = styled.div`
  width: 20rem;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  background: rgba(255, 255, 255, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

export const FavCityName = styled.h1`
  flex: 1;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const RemoveFavCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  padding: 0.5rem;
  background: rgba(245, 106, 106, 0.7);

  cursor: pointer;
`;

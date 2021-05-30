import styled from 'styled-components';

export const NextDaysForecastWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 1rem 1rem;

  @media (max-width: 840px) {
    margin-top: 2rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, auto);
  }
`;

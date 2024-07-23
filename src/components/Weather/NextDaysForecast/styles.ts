import styled from 'styled-components';

export const NextDaysForecastWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-auto-flow: dense;

  @media (max-width: 840px) {
    margin-top: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;


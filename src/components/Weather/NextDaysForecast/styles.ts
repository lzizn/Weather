import styled from 'styled-components';

export const NextDaysForecastWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(auto, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;

  @media (max-width: 840px) {
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

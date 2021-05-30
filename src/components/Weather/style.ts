import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: #fff;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

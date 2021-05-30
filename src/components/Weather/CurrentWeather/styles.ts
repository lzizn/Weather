import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
  width: 45%;
  max-width: 350px;

  padding-right: 1.6rem;

  border-right: 3px solid #c5c3c3;

  & > h1,
  & > h3 {
    color: var(--black-02);
  }

  @media (max-width: 840px) {
    width: 100%;
    border: none;
  }
`;

export const CurrentDate = styled.span`
  color: var(--black-02);
`;

export const TemperatureAndImageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    color: #000;
    font-size: 2.5rem;
  }

  & > img {
    width: 10rem;
    height: 10rem;
  }
`;

export const MaxAndMinTemp = styled.span`
  display: block;
  margin-bottom: 0.4rem;

  font-size: 1.4rem;
  text-align: center;

  color: var(--black-02);
`;

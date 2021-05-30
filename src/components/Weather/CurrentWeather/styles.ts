import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
  width: 45%;
  max-width: 350px;

  border-right: 3px solid #c5c3c3;

  & > h1,
  & > h3 {
    color: var(--black-02);
  }

  & > div:first-of-type {
    display: flex;
    flex: auto;
    align-items: center;
    flex-wrap: wrap;
  }
  & > div:first-of-type > svg {
    cursor: pointer;
    margin-left: 0.5rem;
  }
  @media (max-width: 840px) {
    width: 100%;
    border: none;
  }

  @media (min-width: 840px) {
    padding-right: 1.6rem;
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

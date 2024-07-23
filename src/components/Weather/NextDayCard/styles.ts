import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 10rem;
  height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;

  padding: 0.5rem;

  & > span {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }
`;
export const Main = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  & > img {
    width: 4.2rem;
    height: 4.2rem;
  }

  & > div > h1 {
    font-size: 1.2rem;
    color: var(--black-01);
  }
  & > div > h3 {
    color: var(--black-01);
    font-size: 0.7rem;
  }
`;

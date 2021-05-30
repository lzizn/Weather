import styled, { css } from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  min-width: 300px;

  & > div {
    max-width: 1200px;
  }

  & > div:first-of-type {
    margin-bottom: 1rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;

  padding: 1rem;

  background: var(--white-01);
`;

type ContainerType = {
  flexColumn: boolean;
};

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 1.6rem;

  display: flex;
  ${(props: ContainerType) =>
    props.flexColumn
      ? css`
          flex-direction: column;
        `
      : null}
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: #fff;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

StyledContainer.defaultProps = {
  flexColumn: false,
};

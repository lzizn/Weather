import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  min-width: 300px;

  & > div {
    max-width: 1200px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  padding: 1rem;

  background: var(--white-01);
`;

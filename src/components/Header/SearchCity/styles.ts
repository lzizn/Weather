import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 80%;
  max-width: 300px;
  height: 2.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.2rem 0.5rem 0.2rem 0.2rem;

  border-bottom: 2px solid rgba(60, 56, 56, 0.2);

  & > svg {
    cursor: pointer;
  }
  & > input {
    width: 100%;
    height: 100%;
    flex: 1;
    padding-left: 0.4rem;

    outline: 0;
    border: 0;

    font-size: 1rem;
    font-weight: bold;
    color: rgba(60, 56, 56, 0.6);

    background: transparent;

    &::placeholder {
      color: rgba(60, 56, 56, 0.6);
    }
  }
`;

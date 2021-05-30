import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 80%;
  max-width: 300px;
  height: 2.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;

  background: var(--gray-02);

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
    color: #000;

    background: var(--gray-02);

    &::placeholder {
      color: #000;
    }
    width: 100%;
    height: 100%;
    flex: 1;
    padding-left: 0.4rem;

    outline: 0;
    border: 0;

    font-size: 1rem;
    font-weight: bold;
    color: #000;

    background: var(--gray-02);

    &::placeholder {
      color: #000;
    }
  }
`;

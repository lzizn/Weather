import styled, { css } from 'styled-components';

type ItemProps = {
  size: string;
};

export const PressureAndHumidtyWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: auto;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  & > svg,
  & > img {
    ${(props: ItemProps) =>
      props.size === 'small'
        ? css`
            width: 1rem;
            height: 1rem;
          `
        : css`
            width: 1.5rem;
            height: 1.5rem;
          `}
  }

  & > span {
    ${(props: ItemProps) =>
      props.size === 'small'
        ? css`
            font-size: 0.8rem;
            margin-left: 0.2rem;
          `
        : css`
            font-size: 1.4rem;
            margin-left: 0.5rem;
          `}
  }
`;

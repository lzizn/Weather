import styled, { css } from 'styled-components';

type ContainerProps = {
  icon?: string;
};

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
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

  padding: 2rem;

  background: ${(props: ContainerProps) => getBackgroundColor(props.icon)};
`;

type StyledContainerType = {
  flexColumn: boolean;
};

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 1.6rem;

  display: flex;
  ${(props: StyledContainerType) =>
    props.flexColumn
      ? css`
          flex-direction: column;
        `
      : null}
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.2);

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

StyledContainer.defaultProps = {
  flexColumn: false,
};

const getBackgroundColor = (icon: string | undefined) => {
  if (!icon) {
    return 'linear-gradient(180deg, rgba(128, 245, 245, 1) 0%, rgba(46, 205, 240, 1) 100%);';
  }
  const code = icon.slice(0, 2);

  if (code.includes('01') || code.includes('02')) {
    return 'linear-gradient(180deg, rgba(128, 245, 245, 0.8) 0%, rgba(46, 205, 240, 0.9) 100%);';
  }
  if (code.includes('03') || code.includes('04')) {
    return 'linear-gradient(180deg, rgba(105, 221, 222, 0.7) 0%, rgba(56, 167, 213, 0.9) 100%);';
  }
  if (code.includes('09') || code.includes('10')) {
    return 'linear-gradient(180deg, rgba(85, 181, 250, 0.4) 0%, rgba(56, 167, 211, 0.6) 100%);';
  }
  if (code.includes('11') || code.includes('50')) {
    return 'linear-gradient(180deg, rgba(56, 167, 211, 0.6) 0%, rgba(56, 167, 211, 0.33) 100%);';
  }
  return 'linear-gradient(180deg, rgba(56, 167, 211, 0.6) 0%, rgba(56, 167, 211, 0.33) 100%);';
};

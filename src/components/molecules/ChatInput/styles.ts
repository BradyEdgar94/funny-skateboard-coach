import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div<{ fetching: boolean }>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: ${(props) => props.theme.space.md};
    border-radius: 4rem;
    border: ${(props) => props.theme.borders.sm}
      ${(props) => props.theme.colors.bg_3};
    color: ${(props) => props.theme.colors.bg_3};

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }

  button {
    position: absolute;
    height: 3.8rem;
    width: 3.8rem;
    border-radius: 3.8rem;
    background: ${(props) => props.theme.colors.primary};
    top: ${(props) => props.theme.space.sm};
    right: ${(props) => props.theme.space.sm};
    animation-name: ${spin};

    ${(props) =>
      props.fetching &&
      `
      animation-duration: 2s;
      animation-iteration-count: infinite;
    `};

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }

    &::after {
      ${(props) => (props.fetching ? `content: "\f110"` : `content: "\f00c"`)};
      font-family: FontAwesome;
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

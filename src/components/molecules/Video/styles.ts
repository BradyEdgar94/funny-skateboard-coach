import styled from "styled-components";

export const Wrapper = styled.div<{ ready: boolean }>`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.bg_2};
    visibility: visible;
    transition: visibility 0.5s ease-in-out 2s;

    ${(props) => props.ready && `visibility: hidden;`}
  }
`;

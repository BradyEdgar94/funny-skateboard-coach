import styled from "styled-components";

export const Wrapper = styled.div<{ size: number }>`
  position: relative;
  overflow: hidden;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 100%;
  border: ${(props) => props.theme.borders.md}
    ${(props) => props.theme.colors.bg_1};
  padding: ${(props) => props.theme.space.xs};

  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

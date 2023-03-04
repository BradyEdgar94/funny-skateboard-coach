import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space.md};
  }
`;

export const Bubble = styled.div<{ author: "COACH" | "USER" }>`
  flex: 1;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.space.md};
  font-size: ${(props) => props.theme.fontSizes.xs};

  * {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }

  ${(props) =>
    props.author === "COACH" &&
    `
    border-top-right-radius: 1.5rem;
    background: ${props.theme.colors.primary};
    margin-left: ${props.theme.space.sm};
  `}
  ${(props) =>
    props.author === "USER" &&
    `
  border-top-left-radius: 1.5rem;
  background: ${props.theme.colors.bg3_light};
  margin-right: ${props.theme.space.sm};
  `}

  p {
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: ${(props) => props.theme.space.xs};
  }

  li {
    margin-bottom: ${(props) => props.theme.space.xs};
  }
`;

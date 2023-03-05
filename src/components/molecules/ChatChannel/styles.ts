import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 ${(props) => props.theme.space.lg} ${(props) => props.theme.space.md};
  margin-top: auto;
`;

export const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-flow: column nowrap;
  overflow-y: scroll;

  > :first-child {
    margin-top: auto !important;
  }

  > span {
    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.space.md};
    }
  }
`;

export const Footer = styled.div`
  height: 10rem;
  min-height: 10rem;
  padding: ${(props) => props.theme.space.lg} 0;
`;

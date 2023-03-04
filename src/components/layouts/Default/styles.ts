import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: row;
  }
`;

export const SideBarWrapper = styled.main`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);

  ${(props) => props.theme.mediaQueries.tablet} {
    width: 10rem;
    position: relative;
    transform: none;
  }
`;

export const Body = styled.main`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
`;

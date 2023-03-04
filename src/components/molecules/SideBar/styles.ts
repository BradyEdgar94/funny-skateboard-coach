import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
  height: 100%;
  padding: ${(props) => props.theme.space.lg} 0;
  border-right: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  flex: 1;

  a {
    position: relative;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: ${props => props.theme.borders.md} ${(props) => props.theme.colors.primary};

    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.space.xl};
    }

    &:not(&:nth-child(1)) {
      border-width: 0;
    }

    &:nth-child(1) {
      &::after {
        color: ${(props) => props.theme.colors.primary};
        content: "\f015";
      }
    }

    &:nth-child(2) {
      &::after {
        content: "\f07c";
      }
    }

    &:nth-child(3) {
      &::after {
        content: "\f03d";
      }
    }

    &:nth-child(4) {
      &::after {
        content: "\f291";
      }
    }

    &:nth-child(5) {
      &::after {
        content: "\f013";
      }
    }

    &::after {
      font-family: FontAwesome;
      font-size: ${(props) => props.theme.fontSizes.lg};
      color: ${(props) => props.theme.colors.text_1};
    }
  }
`;

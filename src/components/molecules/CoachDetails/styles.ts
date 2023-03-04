import { Wrapper as AvatarWrapper } from "@/components/atoms/Avatar/styles";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
  border: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};
  border-radius: 0.85rem;
  height: 100%;

  .title {
    padding: ${(props) => props.theme.space.md};
    background: ${(props) => props.theme.colors.background};
    border-top-left-radius: 0.85rem;
    border-top-right-radius: 0.85rem;
    border-bottom: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};
  }

  .details {
    padding: ${(props) => props.theme.space.md};
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    background: ${(props) => props.theme.colors.bg_2};
    border-bottom-left-radius: 0.85rem;
    border-bottom-right-radius: 0.85rem;
  }

  ${AvatarWrapper} {
    margin-right: ${(props) => props.theme.space.sm};
  }
`;

import styled from "styled-components";
import { Wrapper as AvatarWrapper } from "@/components/atoms/Avatar/styles";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: row;
  }
`;

export const Body = styled.div<{ hidden: boolean }>`
  display: flex;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.25s ease-in-out 0.5s, transform 0.25s ease-in-out 0.5s;

  ${(props) =>
    props.hidden &&
    `
      opacity: 0;
      transform: translateY(10rem);
    `};

  ${(props) => props.theme.mediaQueries.tablet} {
    flex: 1;
  }
`;

export const ChatWrapper = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-left: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};
  transition: width 0.25s ease-in-out;

  ${(props) => props.theme.mediaQueries.tablet} {
    ${(props) => (props.expanded ? `width: 100%;` : `width: 50rem;`)}
  }
`;

export const TrickDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  min-height: 20rem;
  padding: ${(props) => props.theme.space.lg};
  border-bottom: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: auto;

    ${AvatarWrapper} {
      margin-right: ${(props) => props.theme.space.sm};
    }
  }
`;

export const VideoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.space.lg};
  overflow: hidden;

  .main-video {
    flex: 1;

    > div {
      overflow: hidden;
      border-radius: 3rem;
    }

    /* Dont Judge me, it's 1AM */
    > div,
    div > div,
    > div iframe {
      width: 100%;
      height: 100%;
    }
  }

  .secondary-videos {
    height: 20rem;
    min-height: 20rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: ${(props) => props.theme.space.md};
    gap: ${(props) => props.theme.space.md};

    > div {
      overflow: hidden;
      border-radius: 3rem;
    }

    /* Dont Judge me, it's 1AM */
    > div,
    div > div,
    > div iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ChatDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  min-height: 20rem;
  padding: ${(props) => props.theme.space.lg};
  border-bottom: ${(props) => props.theme.borders.sm}
    ${(props) => props.theme.colors.bg_1};
`;

export const ChatChannelWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

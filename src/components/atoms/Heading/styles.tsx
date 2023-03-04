import styled from "styled-components";

interface HeadingProps {
  as?: React.ElementType;
}

export const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text};
  font-style: normal;
  line-height: ${(props) => props.theme.lineHeights.base};

  ${(props) => {
    if (props.as === "h1") {
      return `
        font-weight: ${props.theme.fontWeights.bold};
        font-size: ${props.theme.fontSizes["2xl"]};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes["3xl"]};
        }
      `;
    }

    if (props.as === "h2") {
      return `
        font-weight: ${props.theme.fontWeights.bold};
        margin-bottom: ${props.theme.space.md};
        font-size: ${props.theme.fontSizes.xl};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes["2xl"]};
        }
      `;
    }

    if (props.as === "h3") {
      return `
        font-weight: ${props.theme.fontWeights.bold};
        font-size: ${props.theme.fontSizes.lg};
        margin-bottom: ${props.theme.space.sm};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes.xl};
          margin-bottom: ${props.theme.space.sm};
        }
      `;
    }

    if (props.as === "h4") {
      return `
        font-weight: ${props.theme.fontWeights.semibold};
        font-size: ${props.theme.fontSizes.md};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes.lg};
        }
      `;
    }

    if (props.as === "h5") {
      return `
        font-weight: ${props.theme.fontWeights.semibold};
        font-size: ${props.theme.fontSizes.md};
      `;
    }

    if (props.as === "h6") {
      return `
        font-weight: ${props.theme.fontWeights.semibold};
        font-size: ${props.theme.fontSizes.sm};
      `;
    }
  }}
`;

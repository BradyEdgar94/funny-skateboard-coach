import styled, { css } from "styled-components";

import { TextSize } from ".";

interface TextProps {
  as?: React.ElementType;
  size: TextSize;
  uppercase?: boolean;
  pointer?: boolean;
}

export const Text = styled.p<TextProps>`
  ${(props) => props.theme.textMixins.default}

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.primary};
      }
    `}

  &.uppercase {
    text-transform: uppercase;
  }

  ${(props) => {
    if (props.size === TextSize.XLG) {
      return `
        font-size: ${props.theme.fontSizes.sm};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes.md};
        }
      `;
    }

    if (props.size === TextSize.LG) {
      return `
        font-size: ${props.theme.fontSizes.xs};

        ${props.theme.mediaQueries.tablet} {
          font-size: ${props.theme.fontSizes.sm};
        }
      `;
    }

    if (props.size === TextSize.MD) {
      return `
        font-size: ${props.theme.fontSizes['2xs']};
      `;
    }

    if (props.size === TextSize.SM) {
      return `
        font-size: ${props.theme.fontSizes.xs};
      `;
    }
  }}

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

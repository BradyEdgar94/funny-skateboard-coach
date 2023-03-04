import { css, DefaultTheme } from "styled-components";

import type { Breakpoints } from "@/types/index";
import colors from "@/styles/modules/colors";
import typography from "@/styles/modules/typography";

export const BR_TABLET = 720;
export const BR_DESKTOP = 1024;
export const BR_WIDE = 1800;
export const BR_ULTRAWIDE = 2200;

export const breakpoints: Breakpoints = {
  tablet: `${BR_TABLET}px`,
  desktop: `${BR_DESKTOP}px`,
  wide: `${BR_WIDE}px`,
  ultraWide: `${BR_ULTRAWIDE}px`,
};

export const SPACES_SCALES = {
  xs: "0.5rem",
  sm: "1rem",
  base: "1.5rem",
  md: "2rem",
  lg: "3rem",
  xl: "4rem",
} as const;

export const BORDERS = {
  sm: "1px solid",
  md: "4px solid",
  lg: "10px solid",
} as const;

export const Z_INDICES = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
} as const;

const baseTheme: Partial<DefaultTheme> = {
  ...typography,
  colors: colors as any,
  breakpoints: [
    breakpoints.tablet,
    breakpoints.desktop,
    breakpoints.wide,
    breakpoints.ultraWide,
  ],
  mediaQueries: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`,
    wide: `@media screen and (min-width: ${breakpoints.wide})`,
    ultraWide: `@media screen and (min-width: ${breakpoints.ultraWide})`,
  },
  space: SPACES_SCALES,
  sizes: SPACES_SCALES,
  borders: BORDERS,
  textMixins: {
    default: css`
      font-family: ${(props) => props.theme.fonts.body};
      color: ${(props) => props.theme.colors.bodyText};
      overflow-wrap: break-word;
      text-align: left;
      font-style: normal;
      font-weight: ${(props) => props.theme.fontWeights.normal};
      line-height: ${(props) => props.theme.lineHeights.taller};
      transition: 0.2s ease-in-out;
    `,
  },
};

export default baseTheme as DefaultTheme;

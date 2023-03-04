export const LINE_HEIGHTS = {
  normal: "normal",
  none: "1",
  shorter: "1.05",
  short: "1.15",
  base: "1.25",
  tall: "1.325",
  taller: "1.75",
} as const;

export const FONT_WEIGHTS = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export const FONT_FAMILIES = {
  heading: `"Inter", sans-serif`,
  body: `"Poppins", sans-serif`,
  link: `"Inter", sans-serif`,
  fontAwesome: `'Font Awesome 5 Pro'`,
} as const;

export const FONT_SIZES = {
  "2xs": "1.2rem",
  xs: "1.4rem",
  sm: "1.8rem",
  md: "2rem",
  lg: "2.2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "5rem",
} as const;

const typography = {
  lineHeights: LINE_HEIGHTS,
  fontWeights: FONT_WEIGHTS,
  fonts: FONT_FAMILIES,
  fontSizes: FONT_SIZES,
} as const;

export default typography;

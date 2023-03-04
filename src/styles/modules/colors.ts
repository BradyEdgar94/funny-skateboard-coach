/* eslint-disable @typescript-eslint/ban-types */
const colors = {
  transparent: "transparent",
  current: "currentColor",

  white: "#FFFFFF",
  black: "#000000",

  /* ********** Background colors ********** */
  // Light
  bg1_light: "#C1C7D0",
  bg2_light: "#eef0f2",
  bg3_light: "#30363d",
  // Dark
  bg1_dark: "#C1C7D0",

  /* ********** Typography colors ********** */
  // Light
  text1_light: "#323B4B",

  // Dark
  text1_dark: "#FFFFFF",

  /* ********** Primary colors ********** */
  blue: "#377DFF",

  /* ********** Secondary colors ********** */

  /* ********** Extra colors ********** */
} as const;

// thanks MY MENNNNN https://stackoverflow.com/questions/47057649/typescript-string-dot-notation-of-nested-object
type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, string>];

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? string extends F
      ? string
      : `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string;

export type ThemeColorsValues =
  | Join<PathsToStringProps<typeof colors>, ".">
  | (string & {});

export default colors;

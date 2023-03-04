import type { DefaultTheme } from "styled-components";

import colors from "@/styles/modules/colors";
import baseTheme from "@/styles/themes/base";

const theme: DefaultTheme = {
  ...baseTheme,
  theme: "LIGHT",
  colors: {
    ...baseTheme.colors,

    white: colors.white,
    black: colors.black,

    primary: colors.blue,

    background: colors.white,
    text: colors.text1_light,

    text_1: colors.text1_light,

    bg_1: colors.bg1_light,
    bg_2: colors.bg2_light,
    bg_3: colors.bg3_light,
  },
};

export default theme;

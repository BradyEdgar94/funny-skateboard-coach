import "styled-components";

import colors from "~/styles/modules/colors";
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  LINE_HEIGHTS,
  SPACES_SCALES,
} from "~/styles/themes/typography";

export interface Breakpoints {
  tablet: string;
  desktop: string;
  wide: string;
  ultraWide: string;
}

declare module "styled-components" {
  export interface Typography {
    lineHeights: typeof LINE_HEIGHTS;
    fontWeights: typeof FONT_WEIGHTS;
    fonts: typeof FONT_FAMILIES;
    fontSizes: typeof FONT_SIZES;
  }

  export interface DefaultTheme extends Typography {
    theme: "LIGHT" | "DARK";
    breakpoints: string[];
    space: typeof SPACES_SCALES;
    sizes: typeof SPACES_SCALES;
    mediaQueries: {
      tablet: string;
      desktop: string;
      wide: string;
      ultraWide: string;
    };
    colors: typeof colors & {
      background: string;
      text: string;
      bodyText: string;
      primary: string;
      secondary: string;

      // Hard names
      text_1: string;

      bg_1: string;
      bg_2: string;
      bg_3: string;
    };
    borders: typeof BORDERS;
    textMixins: {
      default: FlattenInterpolation<
        ThemedStyledProps<
          {
            [x: string]: any;
          },
          DefaultTheme
        >
      >;
    };
  }
}

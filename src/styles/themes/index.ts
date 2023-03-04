import type { DefaultTheme } from "styled-components";

import { default as light } from "@/styles/themes/light";

export const theme = <Props extends { theme: DefaultTheme }>(props: Props) =>
  props.theme;

export { light };

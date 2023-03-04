import React from "react";

import { Text } from "./styles";

export enum TextSize {
  SM,
  MD,
  LG,
  XLG,
}

interface Props {
  children: React.ReactNode | React.ReactNode[];
  as?: "p" | "span" | "strong";
  className?: string;
  size?: TextSize;
  uppercase?: boolean;
  pointer?: boolean;
}

const TextComponent = ({
  children,
  className,
  as = "p",
  size = TextSize.MD,
  ...props
}: Props) => {
  return (
    <Text as={as} className={className} size={size} {...props}>
      {children}
    </Text>
  );
};

TextComponent.defaultProps = {
  level: 1,
};

export default TextComponent;

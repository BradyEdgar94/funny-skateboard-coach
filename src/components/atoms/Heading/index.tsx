import React from "react";

import { Heading } from "./styles";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const HeadingComponent = ({ level, children, className }: Props) => {
  return (
    <Heading as={`h${level}`} className={className}>
      {children}
    </Heading>
  );
};

HeadingComponent.defaultProps = {
  level: 1,
};

export default HeadingComponent;

import { createGlobalStyle } from "styled-components";

import bootstrap from "@/styles/bootstrap";
import { theme } from "@/styles/themes";

export default createGlobalStyle`
  ${bootstrap};

  * {
    box-sizing: border-box;
    font-family: ${(props) => theme(props).fonts.heading};
    font-weight: ${(props) => theme(props).fontWeights.normal};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => theme(props).colors.background};
    color: ${(props) => theme(props).colors.text};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => theme(props).fonts.heading};
  }

  code, pre {
    font-family: ${(props) => theme(props).fonts.heading};
  }

  p {
    font-family: ${(props) => theme(props).fonts.body};
  }

  a {
    text-decoration: none;
    color: ${(props) => theme(props).colors.text};
  }

  button {
    border: none;
    outline: none;
    padding: 0;
    background: transparent;
  }
`;

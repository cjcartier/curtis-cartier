import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./src/@chakra-ui/gatsby-plugin/theme";
import "./src/fonts/fonts.css";

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      {element}
    </ChakraProvider>
  );
};

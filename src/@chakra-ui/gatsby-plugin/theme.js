import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = {
  fonts: {
    heading: `Sharp-Grotesk, ${base.fonts?.heading}`,
    body: `Sharp-Grotesk, ${base.fonts?.heading}`,
  },
};

export default extendTheme(theme);

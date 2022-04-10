import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SectionHeading = ({ heading, sub }) => {
  return (
    <Box marginBottom={12} id={heading} zIndex="3">
      <Heading as="h2" size="3xl">
        <Box as="span" color="yellow.400" fontSize="8xl" marginRight={2}>
          .
        </Box>
        {heading}
      </Heading>
      <Text as="i" fontSize="2xl">
        -{sub}-
      </Text>
    </Box>
  );
};

export default SectionHeading;

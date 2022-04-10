import { Box, Container } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./nav/mobile-nav.components";
import Nav from "./nav/nav.components";

const Template = ({ children }) => {
  return (
    <Box maxW="full" bg="red.400" color="black" overflow="clip">
      <Container
        maxW="container.xl"
        px={12}
        py={4}
        position="relative"
        zIndex="5"
      >
        <Nav />
        <MobileNav />
      </Container>
      {children}
    </Box>
  );
};

export default Template;

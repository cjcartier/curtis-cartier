import { Box, Container } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./nav/mobile-nav.components";
import Nav from "./nav/nav.components";
import { Helmet } from "react-helmet";

const Template = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="icon" href="../../images/curtis-logo.png" />
      </Helmet>
      <Box maxW="full" bg="red.400" color="black" overflow="hidden">
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
    </>
  );
};

export default Template;

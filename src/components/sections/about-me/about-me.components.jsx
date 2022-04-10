import { Container, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

const AboutMe = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <Flex direction="column">
        <SectionHeading heading="Whomst" sub="A quick snack" />
        <Text
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
          zIndex="3"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
          dictum placerat. Aenean posuere eu sem a interdum. In egestas molestie
          augue, et porttitor diam aliquam vel. Ut et consectetur mi. Aliquam
          eget gravida nibh. Nunc rutrum augue volutpat mollis vestibulum. Nam
          pellentesque sed ipsum congue egestas. Proin tellus nisi, rutrum id
          blandit vitae, bibendum eget dolor. Praesent nunc urna, sagittis non
          semper eget, bibendum vitae dolor. Vestibulum et magna sem. Etiam
          congue condimentum metus, eu cursus eros facilisis ac. Vestibulum
          aliquam sodales neque, commodo dignissim nibh sodales quis. Sed
          venenatis pellentesque libero, id egestas mi finibus vel. Phasellus et
          feugiat ex. Quisque eu mi malesuada, semper metus eu, rutrum magna.
          Sed bibendum tincidunt leo quis tempor. Sed porta quam eget eros
          hendrerit, vitae tincidunt elit placerat. Quisque eros velit, dapibus
          eu lectus non, dictum laoreet metus.
        </Text>
      </Flex>
    </Container>
  );
};

export default AboutMe;

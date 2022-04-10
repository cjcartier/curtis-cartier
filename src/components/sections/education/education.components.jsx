import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import * as React from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

const Education = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading
        heading="Learnt"
        sub="Relevant & Not-So Relevant Education"
      />
      <Grid
        templateColumns="repeat(auto-fill, minmax(450px, 1fr))"
        columnGap={8}
        rowGap={8}
      >
        <GridItem
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
        >
          <Heading as="h3" size="xl">
            Web Programming & Development Courses
          </Heading>
          <Text>That One thing I can rememeber</Text>
          <Text>
            Structured courses for SQL/Databases, ES6+ JS, React/Frameworks,
            State Management, and more.
          </Text>
        </GridItem>
        <GridItem
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
        >
          <Heading as="h3" size="xl">
            Continued Learning
          </Heading>
          <Text>
            School of Reading 1000 Articles and Arbitrary Testing
            {" (unaccredited)"}
          </Text>
          <Text>
            Structured courses for SQL/Databases, ES6+ JS, React/Frameworks,
            State Management, and more.
          </Text>
        </GridItem>
        <GridItem
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
        >
          <Heading as="h3" size="xl">
            Accosciates in Arts & Science
          </Heading>
          <Text>Whatcom Community College</Text>
          <Text>
            Only applies to show that I have a little bit of smarts but not a
            full bachelor smarts
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Education;

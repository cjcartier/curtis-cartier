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
        templateColumns="repeat(auto-fill, minmax(max(300px, 48%), 1fr))"
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
          <Text as="i" fontWeight="700">
            Zero To Mastery Academy
          </Text>
          <Text mt={4}>
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
          <Text as="i" fontWeight="700">
            School of Reading 1000 Articles and Arbitrary Testing
            {" (unaccredited)"}
          </Text>
          <Text mt={4}>
            Regularly reading articles and spinning up new testing environments
            to better my understanding of web development
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
            Associates in Arts & Science
          </Heading>
          <Text as="i" fontWeight="700">
            Whatcom Community College
          </Text>
          <Text mt={4}>
            Only applies to show that I have a little bit of smarts but not a
            full bachelor smarts
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Education;

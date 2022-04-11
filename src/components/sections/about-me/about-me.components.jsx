import { Box, Container, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

const AboutMe = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <Flex direction="column">
        <SectionHeading heading="Whomst" sub="A Quick Snack About Me" />
        <Box
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
          zIndex="3"
        >
          <Text mb={4}>
            Hi! Thanks for scrolling down just a little. My name is Curtis (just
            in case you missed the big black letters above). I am an overly
            obsessive and passionate Frontend Engineer. I am mostly a
            self-taught web engineer with 10 years experience building sites for
            myself and clients. Over the years I have evolved where I spend my
            time learning and what my preferred stack looks like. Originally, I
            began building templated sites with Wordpress before finding the
            world of site builders. From there I dove into configuring plugins
            and enhancing my understanding of PHP and APIs. And now I am almost
            completely focused on building sites in the Jamstack environment.
          </Text>
          <Text mb={4}>
            One of my favorite things to do is solve problems, something that
            originally gravitated me towards coding and software development.
            The more complexity, the better. Talking with clients or team
            members about strategic and logistic company needs and breaking them
            down into ways that software can automate or enhance workflows
            excites me. And then developing user friendly, responsive front-ends
            to streamlining usability bolsters that.
          </Text>
          <Text>
            At this time, I am looking at pursuing working with an existing
            agency that is looking for an engineer keen on growing themselves as
            well as accelerating the growth of the company.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default AboutMe;

import {
  Container,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

const History = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading heading="History" sub="Brief & Relevant Work History" />
      <Grid templateColumns="repeat(auto-fill, minmax(450px,1fr))" gridGap={8}>
        <GridItem
          p={8}
          borderWidth="4px"
          borderColor="blackAlpha.800"
          borderStyle="solid"
          background="whiteAlpha.700"
        >
          <Heading as="h3" size="xl">
            Sr. Developer
          </Heading>
          <Text>Brist MFG | June 2019 - Present</Text>
          <Heading as="h4" size="md" mt={4}>
            About
          </Heading>
          <Text pl={4}>
            Brist designs, manufactures, and distributes branded apparel. Their
            goal is to create an unrivaled merchandise experience to enable
            their clients to focus on what they do best. That includes focusing
            on unique designs, quality blanks and custom fabrics, as well as
            warehousing and distributing clients garments.
          </Text>
          <Heading as="h4" size="md" mt={4}>
            Responsibilities
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
          <Heading as="h4" size="md" mt={4}>
            My Role
          </Heading>
          <Text pl={4}>
            I did a lot of stuff but my primary focus was even more stuff
            because they revaled in an unhealthy and abusive environment.
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
            Developer/Co-Owner
          </Heading>
          <Text>Adventurebear/Eskalated | 2016 - Present</Text>
          <Heading as="h4" size="md" mt={4}>
            About
          </Heading>
          <Text pl={4}>
            Brist designs, manufactures, and distributes branded apparel. Their
            goal is to create an unrivaled merchandise experience to enable
            their clients to focus on what they do best. That includes focusing
            on unique designs, quality blanks and custom fabrics, as well as
            warehousing and distributing clients garments.
          </Text>
          <Heading as="h4" size="md" mt={4}>
            Responsibilities
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>
          <Heading as="h4" size="md" mt={4}>
            My Role
          </Heading>
          <Text pl={4}>
            I did a lot of stuff but my primary focus was even more stuff
            because they revaled in an unhealthy and abusive environment.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default History;

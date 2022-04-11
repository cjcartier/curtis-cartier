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
      <Grid
        templateColumns="repeat(auto-fill, minmax(max(300px, 48%), 1fr))"
        gridGap={8}
      >
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
            <ListItem>
              Develop an easily implemented 3PL eCommerce program
            </ListItem>
            <ListItem>
              Work with clients on logistic problems and creative needs
            </ListItem>
            <ListItem>Oversee the Web & Tech stacks at the company</ListItem>
            <ListItem>
              Address funnel bottlenecks and create automations
            </ListItem>
            <ListItem>
              Regularly manage, maintain, and secure existing sites
            </ListItem>
            <ListItem>
              Work with CEO and team members on department and company growth
            </ListItem>
          </UnorderedList>
          <Heading as="h4" size="md" mt={4}>
            My Role
          </Heading>
          <Text pl={4}>
            Managing a small team, I worked with Brist's enterprise clients to
            solve logistic merchandise fulfillment opportunities. Each clients
            requirements vary as their goals for merchandise sales and
            distribution were typically very different. My goal was to create
            easy to replicate systems that would adapt easily to each client.
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
            Developer & Co-Owner
          </Heading>
          <Text>Adventurebear/Eskalated | 2016 - Present</Text>
          <Heading as="h4" size="md" mt={4}>
            About
          </Heading>
          <Text pl={4}>
            Adventurebear is a 3 person creative agency that focuses on removing
            the difficulties of Design, Branding, Web, and Marketing from the
            shoulders of our clients. We do everything from developing small add
            on services to an existing offering, to full marketing campaigns, to
            developing and launching web apps and sites.
          </Text>
          <Heading as="h4" size="md" mt={4}>
            Responsibilities
          </Heading>
          <UnorderedList pl={4}>
            <ListItem>
              Develop websites, plugins, apps, or any other online services
              asked for by clients
            </ListItem>
            <ListItem>
              Work with team to build out business plans and launch out service
            </ListItem>
            <ListItem>
              Brainstorm regular marketing campaigns that increase client's
              sales
            </ListItem>
            <ListItem>Build out preferred internal tech stacks</ListItem>
          </UnorderedList>
          <Heading as="h4" size="md" mt={4}>
            My Role
          </Heading>
          <Text pl={4}>
            At the beginning of the pandemic, three of us decided to merge our
            businesses together and increase the scope of what we could offer to
            our clients.
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default History;

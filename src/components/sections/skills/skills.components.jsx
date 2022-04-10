import * as React from "react";

import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import DesignCharts from "./charts/design-charts.components";
import DevCharts from "./charts/dev-charts.components";
import SectionHeading from "../../section-heading/section-heading.compontent";

const Skills = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading heading="Skillz" sub="What Am I Good at?" />
      <Box px={8}>
        <Grid
          templateColumns="repeat(auto-fill, minmax(450px, 1fr))"
          rowGap={12}
        >
          <GridItem>
            <Center>
              <Heading as="h3" size="lg" mb="4">
                Development
              </Heading>
            </Center>
            <DevCharts />
          </GridItem>
          <GridItem>
            <Center>
              <Heading as="h3" size="lg" mb="4">
                Design
              </Heading>
            </Center>
            <DesignCharts />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;

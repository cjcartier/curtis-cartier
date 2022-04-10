import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import * as React from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

import { tools } from "./tools.js";

const MyTools = () => {
  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading
        heading="Tools"
        sub="Things I Love/Have Experience Using"
      />
      <Box px={8}>
        <Grid
          templateColumns="repeat(auto-fill, minmax( 100px,1fr))"
          gridGap={8}
          alignItems="center"
          justifyItems="center"
        >
          {tools.map((tool) => (
            <GridItem fontSize={40}>
              <Tooltip label={tool.name}>
                <Icon icon={tool.slug} />
              </Tooltip>
            </GridItem>
          ))}
          <GridItem colSpan={2}>
            <Flex direction="row" alignItems="center">
              <Text>+ More I Didn't Find Icon For</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default MyTools;

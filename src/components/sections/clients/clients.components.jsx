import * as React from "react";

import { Center, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import SectionHeading from "../../section-heading/section-heading.compontent";

import Brist from "../../../images/client-logos/Brist.inline.svg";
import Elysian from "../../../images/client-logos/Elysian.inline.svg";
import JuneShine from "../../../images/client-logos/JuneShine.inline.svg";
import Leafly from "../../../images/client-logos/Leafly.inline.svg";
import Montucky from "../../../images/client-logos/Montucky.inline.svg";
import Pabst from "../../../images/client-logos/Pabst.inline.svg";
import Pow from "../../../images/client-logos/POW.inline.svg";
import Rainier from "../../../images/client-logos/Rainier.inline.svg";

const Clients = () => {
  const logos = [
    Brist,
    Elysian,
    JuneShine,
    Leafly,
    Montucky,
    Pabst,
    Pow,
    Rainier,
  ];

  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading
        heading="Clients"
        sub="Some Notable Folks I've Worked With"
      />
      <Grid
        templateColumns="repeat(auto-fill, minmax(150px,1fr))"
        gap={28}
        alignItems="center"
        px={8}
      >
        {logos.map((Logo) => (
          <GridItem
            colSpan={1}
            fill="blackAlpha.800"
            _hover={{ fill: "purple.800" }}
          >
            <Logo />
          </GridItem>
        ))}
      </Grid>
      <Center mt={20}>
        <Text fontWeight="700" fontSize="lg">
          ...And More
        </Text>
      </Center>
    </Container>
  );
};

export default Clients;

import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import confetti from "../../images/confetti.json";

import CurtisProfile from "../../images/curtis-cartier-profile.png";
import UsedTools from "./used-tools.components";
import { useRef } from "react";

const Hero = () => {
  const confettiRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    document
      .getElementById("Contact")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleConfetti = (event) => {
    confettiRef.current.goToAndPlay(0, false);
  };

  return (
    <Container maxW="container.xl" padding="12" position="relative">
      <Box
        position="absolute"
        top="25%"
        right="-30%"
        width="800px"
        height="800px"
        bg="purple.400"
        borderRadius="50px"
        sx={{
          transform: "rotate(45deg)",
        }}
      />
      <Grid
        templateColumns="repeat(auto-fill, minmax(max(200px,45vw), 1fr))"
        alignItems="center"
        justifyItems="center"
        rowGap={8}
      >
        <GridItem maxW="650px" gridRow={{ sm: "2", lg: "1" }} zIndex="3">
          <Flex direction="row" alignItems="flex-end">
            <Box as="span" color="yellow.400" marginRight={4} fontSize="5xl">
              <Icon icon="ic:twotone-waving-hand" />
            </Box>
            <Text fontSize="2xl">Hiya! I Am</Text>
          </Flex>
          <Heading as="h1" size="4xl" marginBottom={4}>
            Curtis Cartier
          </Heading>
          <Text fontSize="xl" marginBottom={4}>
            I'm that guy in that picture. I like to build dope websites and
            apps. Some might use this space to inject keywords like UI/UX,
            Frontend, Engineer, and Developer
          </Text>
          <Flex direction="row" flexWrap="wrap">
            <Button
              fontWeight="700"
              fontSize="xs"
              textTransform="uppercase"
              bg="whiteAlpha.800"
              opacity=".8"
              color="black"
              borderRadius="0"
              letterSpacing=".7px"
              onClick={handleConfetti}
              mr={4}
              mb={{ base: "4", sm: "0" }}
              _hover={{
                bg: "purple.600",
                color: "white",
                opacity: ".8",
                borderColor: "purple.600",
              }}
            >
              Wanna See Something Cool
            </Button>
            <Button
              fontWeight="700"
              fontSize="xs"
              textTransform="uppercase"
              bg="transparent"
              color="yellow.400"
              borderRadius="0"
              opacity="1"
              borderColor="yellow.400"
              borderWidth="2px"
              letterSpacing=".7px"
              variant="outline"
              onClick={handleClick}
              _hover={{
                bg: "purple.600",
                color: "white",
                opacity: ".8",
                borderColor: "purple.600",
              }}
            >
              Get in Contact
            </Button>
          </Flex>
          <UsedTools />
        </GridItem>
        <GridItem zIndex="3" gridRow="1" position="relative">
          <Image
            boxSize={{ base: "80%", sm: "500px" }}
            src={CurtisProfile}
            alt="Curtis Cartier Profile Image"
            fit="scale-down"
            m="auto"
          />
          <Box position="absolute" top="-25%" left="-25%" zIndex="-1" w="150%">
            <Lottie
              lottieRef={confettiRef}
              animationData={confetti}
              autoplay={false}
              loop={false}
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Hero;

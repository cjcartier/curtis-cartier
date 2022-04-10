import { Box, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SectionHeading from "../../section-heading/section-heading.compontent";

const Contact = (props) => {
  const { formSlug, showSpinner = "1" } = props;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <Container maxW="container.xl" padding="12">
      <SectionHeading heading="Contact" sub="Talk to Me Please" />
      <Box as="div" data-paperform-id={formSlug} data-spinner={showSpinner} />
    </Container>
  );
};

export default Contact;

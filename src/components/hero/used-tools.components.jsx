import { Flex, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

const UsedTools = () => {
  const tools = [
    { url: "react", name: "React" },
    { url: "gatsby", name: "Gatsby" },
    { url: "datocms", name: "Dato CMS" },
    { url: "chakraui", name: "Chakra UI" },
    { url: "github", name: "GitHub" },
  ];
  return (
    <Flex
      direction="row"
      marginTop={6}
      sx={{
        svg: {
          marginRight: "8px",
        },
      }}
    >
      <Text fontWeight="700" fontSize="xs" marginRight={4}>
        Site Built With:
      </Text>
      {tools.map((tool, i) => (
        <Tooltip key={i} label={tool.name}>
          <Icon icon={`simple-icons:${tool.url}`} />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default UsedTools;

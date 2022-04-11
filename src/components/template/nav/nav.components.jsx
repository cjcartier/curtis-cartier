import React from "react";

import { Flex } from "@chakra-ui/react";

import { navItems } from "./nav.data";
import NavItem from "./navItem.component";

const Nav = () => {
  return (
    <Flex
      direction="row"
      justifyContent="flex-end"
      pt={8}
      display={{ base: "none", lg: "flex" }}
    >
      {navItems.map((item, i) => (
        <NavItem key={i} item={item} />
      ))}
    </Flex>
  );
};

export default Nav;

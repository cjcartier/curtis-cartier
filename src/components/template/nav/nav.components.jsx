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
      display={{ sm: "none", lg: "flex" }}
    >
      {navItems.map((item) => (
        <NavItem item={item} />
      ))}
    </Flex>
  );
};

export default Nav;
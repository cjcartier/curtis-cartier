import React from "react";

import { Flex, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

import { navItems } from "./nav.data.js";
import NavItem from "./navItem.component.jsx";

const MobileNav = () => {
  return (
    <Flex
      direction="row"
      justifyContent="flex-end"
      pt={8}
      display={{ base: "flex", lg: "none" }}
      mb="-12"
    >
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<Icon icon="fa-solid:hamburger" />}
          colorScheme="yellow"
        ></MenuButton>
        <MenuList zIndex="5">
          {navItems.map((item) => (
            <NavItem item={item} isMobile={true} />
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MobileNav;

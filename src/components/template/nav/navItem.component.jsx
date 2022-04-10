import React, { useEffect, useState } from "react";

import { Link } from "gatsby";
import { Box, MenuItem } from "@chakra-ui/react";

const NavItem = ({ item, active, isMobile = false }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(item));
  }, [item]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {isMobile ? (
        <Link to={`#${item}`} className={active} onClick={handleClick}>
          <MenuItem>{item}</MenuItem>
        </Link>
      ) : (
        <Box
          marginRight={6}
          fontWeight="700"
          letterSpacing=".5px"
          fontSize="sm"
        >
          <Link to={`#${item}`} onClick={handleClick} className={active}>
            {item}
          </Link>
        </Box>
      )}
    </>
  );
};

export default NavItem;

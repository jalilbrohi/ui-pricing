import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      bg={"#6B46C1"}
      pt={"90px"}
      pb={"250px"}
      color={"white"}
      pl={"40px"}
      //mr="20px"
    >
      <Heading size={"2xl"}>Simple pricing for your business</Heading>
      <Text pt="18px" mr={"20px"} fontSize="2xl">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}

export default Header;

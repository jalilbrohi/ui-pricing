import React from "react";
import {
  Box,
  Icon,
  HStack,
  Flex,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";
import checkmark from "./icons/checkmark";
function Price() {
  return (
    <Box
      maxW={"950px"}
      mx={{ base: "20px", lg: "auto" }}
      //   ml={{ base: "20px", lg: "auto" }}
      //   mr={{ base: "20px", lg: "auto" }}
      mt={"-210px"}
      bg="white"
      borderRadius={"12px"}
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg={"purple.100"} textAlign="center" p={"60px"}>
          <Text fontSize={"24px"} fontWeight="bold">
            Premium PRO
          </Text>
          <Heading fontSize={"50px"}>$329</Heading>
          <Text pb={"20px"}>billed just once</Text>
          <Button w={"210px"} color="white" bg={"purple.600"}>
            Get Started
          </Button>
        </Box>
        <Box p={"5px"} pb="50px">
          <Text pt={"50px"} pl={"40px"} mr="20px">
            Access these features when you get this pricing package for your
            business.
          </Text>

          <HStack pt={"15px"} pl={"40px"}>
            <Icon as={checkmark} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack pt={"10px"} pl={"40px"}>
            <Icon as={checkmark} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack pt={"10px"} pl={"40px"}>
            <Icon as={checkmark} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack pt={"10px"} pl={"40px"}>
            <Icon as={checkmark} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Price;

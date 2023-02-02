"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Features from "./Features";
import Header from "./Header";
import Price from "./Price";

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Price />
      <Features />
    </ChakraProvider>
  );
}

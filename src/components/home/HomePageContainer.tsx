"use client";

import { ReactNode } from "react";

interface HomePageContainerProps {
  children: ReactNode;
}

import { Container, Box } from "@chakra-ui/react";

export default function HomePageContainer({
  children,
}: HomePageContainerProps) {
  return (
    <Box bg="blue.300" h="100vh">
      <Container h="100%">{children}</Container>
    </Box>
  );
}

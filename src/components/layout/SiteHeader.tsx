"use client";

import type { CategoryCollection } from "@chec/commerce.js/features/categories";

import BrandLogo from "../shared/icons/BrandLogo";

import { Container, Box, Text, Flex } from "@chakra-ui/react";

interface HeaderProps {
  categories: CategoryCollection;
}

export default function Header({ categories }: HeaderProps) {
  const items = categories.data.map((category) => {
    return (
      <Text color="white" key={category.id}>
        {category.name}
      </Text>
    );
  });
  // TODO
  // Create list of category with links to pages
  // Create mobileDropdown component
  // Create CartModal with CartIcon-Link

  return (
    <Box bg={"black"}>
      <Container
        variant="pageSection"
        p="34px 34px"
        borderBottom={"1px solid grey"}
      >
        <Flex>
          <BrandLogo />
          <Flex>home {items}</Flex>
        </Flex>
      </Container>
    </Box>
  );
}

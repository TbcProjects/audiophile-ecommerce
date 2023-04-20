"use client";

import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

interface CategoryPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any;
}

export default function CategoryList({ categories }: CategoryPageProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categoryList = categories.data.map((category: any) => {
    return <ListItem key={category.id}>{category.name}</ListItem>;
  });

  return (
    <Box>
      <Box>Audiophile Storefront</Box>
      <UnorderedList>{categoryList}</UnorderedList>

      <a href="/category/headphones">Link</a>
    </Box>
  );
}

"use client";

import { Box } from "@chakra-ui/react";

import type { Params } from "@/types/general";

export default function CategoryPage({ params }: Params) {
  const { slug } = params;

  return (
    <Box>
      <h1>Category page {slug} </h1>
    </Box>
  );
}

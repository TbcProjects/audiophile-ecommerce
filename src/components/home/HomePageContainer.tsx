"use client";

import { useQuery } from "@apollo/client";
import { HOMEPAGE_QUERY } from "../../lib/gql/queries/dato";
import type { MyQuery } from "@/lib/gql/queries/__generated__/MyQuery";
import type { ReactNode } from "react";

import { Container, Box } from "@chakra-ui/react";

interface HomePageContainerProps {
  children: ReactNode;
}

export default function HomePageContainer({
  children,
}: HomePageContainerProps) {
  const { data } = useQuery<MyQuery>(HOMEPAGE_QUERY);

  console.log(data?.pageHome);

  return (
    <Box bg="black">
      <h1>Hello</h1>
      <Container h="100%">{children}</Container>
    </Box>
  );
}

"use client";

import { ReactNode } from "react";

import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { client } from "../lib/clients/datocms";
import theme from "@/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

"use client";

import { Text } from "@chakra-ui/react";

interface HeadingProps {
  heading: string;
}

export default function Heading({ heading }: HeadingProps) {
  return <Text>{heading}</Text>;
}

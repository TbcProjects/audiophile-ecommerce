"use client";
import client from "@/lib/commerce";

import { use } from "react";

import { Container } from "@chakra-ui/react";

const fetchCommerce = async () => {
  const data = await client.categories.list();
  return data;
};

export default function HomePage() {
  const categories = use(fetchCommerce());

  const categoryList = categories.data.map((category) => {
    return (
      <div key={category.id}>
        <p>{category.name}</p>
      </div>
    );
  });

  return (
    <main>
      <Container>
        <h1>Audiophile Storefront</h1>
        {categoryList}
      </Container>
    </main>
  );
}

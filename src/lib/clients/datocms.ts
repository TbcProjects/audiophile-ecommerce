import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const datoHttpLink = createHttpLink({
  uri: "https://graphql.datocms.com",
  headers: {
    authorization: `Bearers ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  },
});

export const client = new ApolloClient({
  link: datoHttpLink,
  cache: new InMemoryCache(),
});

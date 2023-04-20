import { GraphQLClient } from "graphql-request";

import { getSdk } from "@/types/Dato/datoTypes";

export const configureSdk = (preview = false) => {
  const headers: Record<string, string> = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  if (preview) {
    headers["X-Include-Drafts"] = "true";
  }

  const endpoint = preview
    ? "https://graphql.datocms.com/preview"
    : "https://graphql.datocms.com";

  const client = new GraphQLClient(endpoint, { headers });

  return getSdk(client);
};

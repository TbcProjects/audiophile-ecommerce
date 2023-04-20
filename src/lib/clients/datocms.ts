import { GraphQLClient } from "graphql-request";

import { getSdk } from "@/types/Dato/datoTypes";

interface RequestArgs {
  query: string;
  variables?: Record<string, unknown>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
}

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: RequestArgs) {
  const headers: Record<string, string> = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts ?? false) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid ?? false) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
}

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

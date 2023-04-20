import client from "./clients/commerce";
import { configureSdk } from "../lib/clients/datocms";

export const fetchCommerce = async () => {
  const data = await client.categories.list();
  return data;
};

export const fetchContent = async () => {
  const data = await configureSdk().MyQuery();

  return data;
};

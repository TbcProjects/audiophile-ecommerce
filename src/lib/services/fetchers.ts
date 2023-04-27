import client from "../clients/commerce";

export const fetchCommerce = async () => {
  const data = await client.categories.list();
  return data;
};

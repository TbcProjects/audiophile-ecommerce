import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(
  process.env.NEXT_PUBLIC_CHEC_PUBLIC_TEST_API_KEY as string
);

export default client;

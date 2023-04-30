import CommerceSDK from "@chec/commerce.js";

const client = new CommerceSDK(
  process.env.NEXT_PUBLIC_CHEC_PUBLIC_LIVE_API_KEY as string,
  false,
  { cartLifetime: 1 }
);

export default client;

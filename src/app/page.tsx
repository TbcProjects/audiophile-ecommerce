import { fetchCommerce, fetchContent } from "@/lib/fetchers";

import CategoryList from "@/components/home/CategoryList";
import Heading from "@/components/shared/Heading";
import HomePageContainer from "@/components/home/HomePageContainer";

export default async function HomePage() {
  const categories = await fetchCommerce();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content = (await fetchContent()) as any;

  const heading = content.allPages[0].heading[0].heading;

  return (
    <main>
      <HomePageContainer>
        <Heading heading={heading} />
        <CategoryList categories={categories} />
      </HomePageContainer>
    </main>
  );
}

import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { Intro } from "@/components/intro/Intro";
import { Usecases } from "@/components/usecases/Usecases";
import { Showcases } from "@/components/showcases/Showcases";
import { Stats } from "@/components/stats/Stats";
import { Reviews } from "@/components/reviews/Reviews";
import { Faqs } from "@/components/faqs/Faqs";
import { Communities } from "@/components/communities/Communities";

export default function Home() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <NextSeo title="Home" />
      <Intro />
      <Usecases />
      <Stats />
      <Showcases />
      <Faqs />
      <Reviews />
      <Communities />
    </Flex>
  );
}

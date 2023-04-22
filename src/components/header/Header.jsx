import { Flex, Text } from "@chakra-ui/react";

import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { Auth } from "../auth/Auth";
import { Banner } from "../banners/Banner";

export const Header = () => {
  return (
    <header>
      <Banner />
      <nav>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="4"
          className="w-full xl:px-28 sm:px-12 xs:px-2 border-b border-b-slate-800"
        >
          <Flex alignItems={"center"} cursor={"pointer"} mr="auto" gap={2}>
            <Logo />
            <Text variant="">SAAS Template</Text>
          </Flex>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <Navigation />
          </Flex>
          <Flex
            alignItems={"center"}
            cursor={"pointer"}
            ml="auto"
            display={{ base: "none", md: "flex", lg: "flex" }}
          >
            <Auth />
          </Flex>
        </Flex>
      </nav>
      <nav className="lg:hidden w-56 right-0 h-screen fixed pb-40 z-10 border-l backdrop-blur-lg bg-bg-sidebar z-50 border-slate-700/40 transition-transform duration-300 translate-x-0">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          className=" z-10 w-full h-full"
          p={4}
        >
          <Navigation />
          <Auth />
        </Flex>
      </nav>
    </header>
  );
};

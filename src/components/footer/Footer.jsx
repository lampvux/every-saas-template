import { Flex, Box, Text } from "@chakra-ui/react";
import { Resources } from "../resources/Resources";
import { Contact } from "../contact/Contact";
import { Logo } from "../logo/Logo";
import { Socials } from "../socials/Socials";
import { Copyrights } from "../copyrights/Copyrights";
import { Newsletter } from "../newsletter/Newsletter";

export const Footer = () => {
  return (
    <footer className="w-full relative ">
      <Flex
        overflow="hidden"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
        className="border-y border-y-slate-700 overflow-hidden xs:py-11 md:gap-28 xs:gap-8 sm:pl-8"
        p="10"
      >
        <Flex flexDirection="column" alignItems="flex-start" gap="12">
          <Box>
            <Flex alignItems={"center"} cursor={"pointer"} mr="auto" gap={2}>
              <Logo />
              <Text fontSize="2xl" as="b" className="text-purple-900">
                SAAS Template
              </Text>
            </Flex>
            <Text>Something to say ?</Text>
          </Box>
          <Socials />
        </Flex>
        <Resources />
        <Flex flexDirection="column" alignItems="flex-start" gap="6">
          <Contact />
          <Newsletter />
        </Flex>
      </Flex>
      <Copyrights />
    </footer>
  );
};

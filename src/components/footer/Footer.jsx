import { Flex, Box } from "@chakra-ui/react";
import { Resources } from "../resources/Resources";
import { Contact } from "../contact/Contact";

export const Footer = () => {
  return (
    <footer>
      <Flex>
        <Box></Box>
        <Resources />
        <Contact />
      </Flex>
    </footer>
  );
};

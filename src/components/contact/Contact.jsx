import { Button, Flex, Text } from "@chakra-ui/react";

export const Contact = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Text as="b" fontSize="xl">
        Contact Us
      </Text>
      <Text>We are here to help</Text>
      <Button colorScheme="purple" size="md">
        Contact
      </Button>
    </Flex>
  );
};

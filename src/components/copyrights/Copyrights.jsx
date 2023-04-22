import { Flex, Text } from "@chakra-ui/react";

export const Copyrights = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="2"
      p="2"
      cursor="pointer"
      className="bg-purple-600 w-full text-purple-100"
    >
      <Text>✨ </Text>
      <Text> Copy right {new Date().getFullYear()} LamVu </Text>
      <Text>✨ </Text>
    </Flex>
  );
};

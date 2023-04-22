import { Flex, Text } from "@chakra-ui/react";

export const Banner = () => {
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
      <Text>
        {" "}
        We announcing new feature which you cant believe on your own eye @@{" "}
      </Text>
      <Text>✨ </Text>
    </Flex>
  );
};

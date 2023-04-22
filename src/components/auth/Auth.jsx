import { Flex, Button } from "@chakra-ui/react";
export const Auth = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="2"
      ml="auto"
      w="100%"
      direction={{ base: "column", md: "row" }}
    >
      <Button colorScheme="messenger" width={{ base: "100%", md: "auto" }}>
        Try Free
      </Button>
      <Button colorScheme="messenger" width={{ base: "100%", md: "auto" }}>
        Login
      </Button>
    </Flex>
  );
};

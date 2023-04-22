import { Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Resources = () => {
  return (
    <Grid templateColumns="repeat(4,minmax(0,1fr))" gap="8" alignSelf="center">
      <Flex flexDirection="column" gap="6">
        <Text as="b" fontSize="xl">
          Resources
        </Text>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/documents">Documents</Link>
      </Flex>
      <Flex flexDirection="column" gap="6">
        <Text as="b" fontSize="xl">
          Products
        </Text>
        <a href="http://google.com">Product 1</a>
        <a href="http://google.com">Product 2</a>
        <a href="http://google.com">Product 3</a>
        <a href="http://google.com">Product 4</a>
      </Flex>
      <Flex flexDirection="column" gap="6">
        <Text as="b" fontSize="xl">
          More
        </Text>
        <a href="http://google.com">Product 1</a>
        <a href="http://google.com">Product 2</a>
        <a href="http://google.com">Product 3</a>
        <a href="http://google.com">Product 4</a>
      </Flex>
      <Flex flexDirection="column" gap="6">
        <Text as="b" fontSize="xl">
          Legal
        </Text>
        <Link href="/terms-conditions">Terms</Link>
        <Link href="/privacy-policy">Policy</Link>
      </Flex>
    </Grid>
  );
};

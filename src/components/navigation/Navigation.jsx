import Link from "next/link";
import { Flex } from "@chakra-ui/react";

export function Navigation() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="8"
      w="100%"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="/about" className="block lg:inline-block lg:mt-0 ">
        About Us
      </Link>
      <Link href="/documents" className="block lg:inline-block lg:mt-0 ">
        Documentations
      </Link>
      <Link href="/pricing" className="block lg:inline-block lg:mt-0 ">
        Pricing
      </Link>
    </Flex>
  );
}

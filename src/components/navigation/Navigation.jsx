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
      <Link href="/about" className="text-purple-500 hover:text-purple-900">
        About Us
      </Link>
      <Link href="/documents" className="text-purple-500 hover:text-purple-900">
        Documentations
      </Link>
      <Link href="/pricing" className="text-purple-500 hover:text-purple-900">
        Pricing
      </Link>
    </Flex>
  );
}

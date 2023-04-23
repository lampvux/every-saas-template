import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export const Newsletter = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" gap="2">
      <Text as="b" fontSize="xl">
        Subscribe to our newsletter
      </Text>
      <Text>
        Stay updated on new releases and features, guides, and case studies.
      </Text>
      <FormControl isRequired="true">
        <Box display="inline-flex" className="w-full" gap="2">
          <Input type="email" />
          <Button colorScheme="purple" size="md">
            Subscribe
          </Button>
        </Box>
      </FormControl>
    </Flex>
  );
};

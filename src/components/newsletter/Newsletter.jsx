import {
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export const Newsletter = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Text as="b" fontSize="xl">
        Subscribe to our newsletter
      </Text>
      <Text>
        Stay updated on new releases and features, guides, and case studies.
      </Text>
      <FormControl isRequired="true">
        <Input type="email" />
        <FormHelperText>{`We'll never share your email.`}</FormHelperText>
        <Input type="submit" />
      </FormControl>
    </Flex>
  );
};

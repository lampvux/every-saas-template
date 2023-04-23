import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Showcases = () => {
  const [showcaseRef] = useKeenSlider({
    loop: false,
    mode: "free",
    slides: {
      perView: 1,
    },
  });
  return (
    <Flex p="4" gap="2">
      <Box ref={showcaseRef} className="keen-slider" p="1" gap="2">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>blabla</Box>

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>blabla</Box>

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>blabla</Box>

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Box>blabla</Box>

          <Stack>
            <CardBody>
              <Heading size="md">The perfect latte</Heading>

              <Text py="2">
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>
    </Flex>
  );
};

import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Intro = () => {
  const [typeText, setTypeText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setisDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(300);
  useEffect(() => {
    const typeWriterData = [
      "React + Next Code",
      "New Stuffs",
      "Your own SAAS Website",
    ];
    // Initial Type Speed
    const timer = setTimeout(() => {
      const current = wordIndex % typeWriterData.length;
      // Get full text of current word
      const fullTxt = typeWriterData[current];

      // Check if deleting
      if (isDeleting) {
        // Remove char
        setTypeText(fullTxt.substring(0, typeText.length - 1));
      } else {
        // Add char
        setTypeText(fullTxt.substring(0, typeText.length + 1));
      }

      if (isDeleting) {
        setTypeSpeed(150);
      }

      // If word is complete
      if (!isDeleting && typeText === fullTxt) {
        // Make pause at end
        setTypeSpeed(3000);
        // Set delete to true
        setisDeleting(true);
      } else if (isDeleting && typeText === "") {
        setisDeleting(false);
        // Move to next word
        setWordIndex(wordIndex + 1);
        // Pause before start typing
        setTypeSpeed(400);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [isDeleting, typeSpeed, typeText, wordIndex]);

  return (
    <Flex flexDirection="column" gap="4" p="4">
      <Flex
        flexDirection="column"
        gap="2"
        justifyContent="center"
        alignItems="center"
        mb="10"
      >
        <Text fontSize="5xl" as="b">
          Using SAAS TEMPLATE TO
        </Text>
        <Text fontSize="5xl" as="b">
          Create{" "}
          <span className="txtType border-r-8 border-purple-500">
            {typeText}
          </span>
        </Text>
        <Text fontSize="5xl" as="b">
          in Seconds with React & Next
        </Text>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Flex justifyContent="center">
        <Button colorScheme="purple" size="md">
          CALL to Action
        </Button>
      </Flex>
    </Flex>
  );
};

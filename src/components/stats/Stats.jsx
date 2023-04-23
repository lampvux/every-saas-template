import {
  Flex,
  Heading,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

export const Stats = () => {
  return (
    <Flex flexDirection="column" gap="2" p="4">
      <Heading as="h2" size="2xl">
        (2xl) In love with React & Next
      </Heading>
      <Flex flexDirection="row" alignItems="center" gap="4">
        <Stat p="2" className="border border-purple-300">
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat p="2" className="border border-purple-300">
          <StatLabel>Clicked</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            9.05%
          </StatHelpText>
        </Stat>
        <Stat p="2" className="border border-purple-300">
          <StatLabel>Used</StatLabel>
          <StatNumber>300</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            45.05%
          </StatHelpText>
        </Stat>
      </Flex>
    </Flex>
  );
};

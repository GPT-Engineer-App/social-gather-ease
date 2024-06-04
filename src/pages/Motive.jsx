import { Box, Heading, Text } from "@chakra-ui/react";

function Motive() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={5}>
        Motive
      </Heading>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={2}>
          Who
        </Heading>
        <Text>Details about who...</Text>
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={2}>
          What
        </Heading>
        <Text>Details about what...</Text>
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={2}>
          Where
        </Heading>
        <Text>Details about where...</Text>
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={2}>
          When
        </Heading>
        <Text>Details about when...</Text>
      </Box>
    </Box>
  );
}

export default Motive;

import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="gray.100" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" variant="link">
          Home
        </Button>
        <Button as={Link} to="/motive" variant="link">
          Motive
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;

import { Box, Flex, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="brand.700" w="100%" p={4} color="white">
      <Flex justify="center">
        <Text fontSize="xl">Animation Web App</Text>
      </Flex>
    </Box>
  );
};

export default NavBar;
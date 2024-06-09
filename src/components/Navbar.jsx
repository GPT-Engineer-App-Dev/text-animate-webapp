import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.500" color="white" px={4} py={2} width="full">
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="md">Animation WebApp</Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;
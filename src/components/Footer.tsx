import { Box, Container, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = import.meta.env.VITE_NAME || 'Full Name';
  
  return (
    <Box 
      bg="black" 
      color="gray.400" 
      py={8}
      borderTop="1px solid"
      borderColor="gray.800"
    >
      <Container maxW="container.xl">
        <Box textAlign="center">
          <Text fontSize="sm">
            © {currentYear} {name}. All rights reserved.
          </Text>
          <Text fontSize="sm" mt={2}>
            Built with{' '}
            <Link
              href="https://reactjs.org"
              isExternal
              color="accent.500"
              _hover={{ color: 'accent.600' }}
            >
              React
            </Link>
            {' '}and{' '}
            <Link
              href="https://chakra-ui.com"
              isExternal
              color="accent.500"
              _hover={{ color: 'accent.600' }}
            >
              Chakra UI
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

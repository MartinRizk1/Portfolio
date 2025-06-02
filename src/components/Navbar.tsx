import React from 'react';
import { Box, Container, Stack, Text, Link, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionBox 
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="gray.800"
      zIndex={100}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxW="container.xl" py={4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text 
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="light"
            letterSpacing="0.2em"
            color="accent.500"
            cursor="pointer"
            onClick={() => scrollToSection('top')}
            textTransform="uppercase"
            _hover={{ color: 'white' }}
            transition="all 0.3s"
          >
            M·Rizk
          </Text>

          <Stack direction="row" spacing={{ base: 4, md: 8 }} align="center">
            <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="sm"
              borderColor="accent.500"
              color="accent.500"
              _hover={{
                bg: 'accent.500',
                color: 'black'
              }}
              borderRadius="none"
              letterSpacing="wider"
              fontWeight="light"
            >
              Contact
            </Button>
          </Stack>
        </Stack>
      </Container>
    </MotionBox>
  );
};

const NavLink = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
  <Link
    onClick={onClick}
    color="gray.400"
    fontSize="sm"
    letterSpacing="0.1em"
    fontWeight="light"
    textTransform="uppercase"
    position="relative"
    sx={{
      '&:hover': {
        color: 'white',
        '&:after': {
          width: '100%'
        }
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '0',
        width: '0%',
        height: '1px',
        bg: 'accent.500',
        transition: 'width 0.3s ease'
      }
    }}
    cursor="pointer"
  >
    {children}
  </Link>
);

export default Navbar;
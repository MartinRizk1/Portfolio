import React from 'react';
import { Box, Container, Stack, Link, Icon, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaHandshake, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ContactLink = ({ icon, text, href, label }: { icon: any; text: string; href: string; label: string }) => (
  <MotionBox
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="flex"
      alignItems="center"
      p={6}
      bg="gray.900"
      borderRadius="sm"
      _hover={{ 
        transform: "translateX(10px)",
        bg: "gray.800"
      }}
      transition="all 0.3s"
      aria-label={label}
    >
      <Icon as={icon} boxSize={6} color="accent.500" />
      <Text 
        ml={4} 
        color="white" 
        fontSize="lg"
        fontWeight="medium"
      >
        {text}
      </Text>
    </Link>
  </MotionBox>
);

const Contact: React.FC = () => {
  const email = import.meta.env.VITE_EMAIL || 'martinrizk8@gmail.com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <Box 
      id="contact" 
      py={24} 
      bg="black" 
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        bgGradient: 'linear(to-r, transparent, accent.500, transparent)',
      }}
    >
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <Box textAlign="center">
            <Heading 
              size="2xl"
              color="accent.500"
              letterSpacing="wider"
              fontWeight="bold"
              mb={6}
            >
              Let's Connect
            </Heading>
            <Text 
              fontSize="xl" 
              maxW="2xl" 
              color="gray.300"
              letterSpacing="wide"
            >
              I'm always interested in discussing new opportunities, innovative projects, 
              or potential collaborations in computer engineering and software development.
            </Text>
          </Box>
          
          <Stack 
            spacing={4} 
            w="full" 
            maxW="2xl"
            direction="column"
          >
            <ContactLink
              icon={FaEnvelope}
              text={email}
              href={gmailUrl}
              label="Email"
            />
            <ContactLink
              icon={FaGithub}
              text="GitHub Profile"
              href={import.meta.env.VITE_GITHUB_URL || "https://github.com/MartinRizk1"}
              label="GitHub"
            />
            <ContactLink
              icon={FaLinkedin}
              text="LinkedIn Profile"
              href={import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/martin-rizk-a3b877237/"}
              label="LinkedIn"
            />
            <ContactLink
              icon={FaHandshake}
              text="Handshake Profile"
              href={import.meta.env.VITE_HANDSHAKE_URL || "https://utdallas.joinhandshake.com/profiles/58162350"}
              label="Handshake"
            />
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
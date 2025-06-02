import React from 'react';
import { Box, Container, Flex, Image, Text, Heading, keyframes } from '@chakra-ui/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero: React.FC = () => {
    const animation = `${fadeIn} 1s ease-out`;

    return (
        <Box 
            bg="black" 
            py={32} 
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgGradient: 'linear(to-b, transparent, black)',
                zIndex: 1
            }}
        >
            <Container maxW="container.xl" position="relative" zIndex={2}>
                <Flex 
                    direction={{ base: 'column', md: 'row' }} 
                    align="center" 
                    justify="center"
                    gap={16}
                >
                    <Box 
                        flex={1} 
                        animation={animation}
                    >
                        <Image
                            src="/profile-image.jpg"
                            alt="Martin Rizk"
                            borderRadius="full"
                            boxSize={{ base: '320px', md: '400px' }}
                            objectFit="cover"
                            mx="auto"
                            border="4px solid"
                            borderColor="accent.500"
                            shadow="2xl"
                            transition="transform 0.3s ease"
                            _hover={{ transform: 'scale(1.02)' }}
                        />
                    </Box>
                    <Box 
                        flex={1}
                        animation={animation}
                        style={{ animationDelay: '0.2s' }}
                    >
                        <Heading 
                            as="h1" 
                            fontSize={{ base: '4xl', md: '5xl' }} 
                            mb={6} 
                            color="white"
                            fontWeight="bold"
                            letterSpacing="wider"
                        >
                            Martin Rizk
                        </Heading>
                        <Text 
                            fontSize={{ base: 'lg', md: 'xl' }} 
                            color="gray.300" 
                            lineHeight="tall"
                            mb={6}
                            fontWeight="light"
                        >
                            Computer Engineering student and software developer specializing in embedded systems, 
                            hardware-software integration, and full-stack development. Passionate about creating 
                            efficient solutions that bridge the gap between hardware and software.
                        </Text>
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="accent.500"
                            fontWeight="medium"
                            letterSpacing="wide"
                        >
                            COMPUTER ENGINEER · SOFTWARE DEVELOPER
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Hero;
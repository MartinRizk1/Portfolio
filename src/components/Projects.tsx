import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a modern, responsive personal portfolio website showcasing my skills and projects. Implemented dark theme, smooth animations, and responsive design principles.',
    technologies: ['React', 'TypeScript', 'Chakra UI', 'Framer Motion']
  }
];

export default function Projects() {
  return (
    <Box bg="black" py={16} id="projects">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            textAlign="center"
            mb={8}
            color="accent.500"
            letterSpacing="wider"
            fontWeight="bold"
          >
            Personal Projects
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                bg="gray.900"
                p={6}
                borderRadius="lg"
                border="1px solid"
                borderColor="gray.800"
                boxShadow="lg"
                _hover={{
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease',
                  borderColor: 'accent.500',
                  bg: 'gray.800'
                }}
              >
                <VStack align="start" spacing={4}>
                  <Box 
                    w="full" 
                    h="200px" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    bg="gray.800"
                    borderRadius="md"
                    fontSize="8xl"
                  >
                    💼
                  </Box>
                  <Heading size="md" color="white">{project.title}</Heading>
                  <Text color="gray.400">{project.description}</Text>
                  <Box>
                    {project.technologies.map((tech, idx) => (
                      <Text
                        key={idx}
                        as="span"
                        fontSize="sm"
                        color="accent.500"
                        mr={2}
                        fontWeight="medium"
                      >
                        #{tech}
                      </Text>
                    ))}
                  </Box>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
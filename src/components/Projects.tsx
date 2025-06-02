import { Box, Container, Heading, Text, Image, Link, Tag, Stack, IconButton, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    bg="gray.900"
    borderRadius="sm"
    overflow="hidden"
    position="relative"
    style={{
      transition: 'transform 0.3s ease'
    }}
    _hover={{ transform: 'translateY(-8px)' }}
  >
    <Flex direction="row" align="center">
      <Box position="relative" width="180px" height="180px" p={6}>
        <Image
          src={project.image}
          alt={project.title}
          objectFit="contain"
          w="100%"
          h="100%"
        />
      </Box>
      <Box p={8} flex="1">
        <Heading
          size="lg"
          mb={4}
          color="white"
          letterSpacing="wider"
          fontWeight="semibold"
        >
          {project.title}
        </Heading>
        <Text
          color="gray.300"
          mb={6}
          fontSize="md"
          lineHeight="tall"
        >
          {project.description}
        </Text>
        <Stack direction="row" spacing={3} flexWrap="wrap" gap={3}>
          {project.technologies.map((tech, index) => (
            <Tag
              key={index}
              size="md"
              variant="subtle"
              bg="gray.800"
              color="accent.500"
              px={4}
              py={2}
              borderRadius="sm"
            >
              {tech}
            </Tag>
          ))}
        </Stack>
      </Box>
    </Flex>
    <Box
      position="absolute"
      top={0}
      right={0}
      p={4}
      display="flex"
      gap={3}
    >
      {project.github && (
        <IconButton
          as="a"
          href={project.github}
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub size="20px" />}
          size="md"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200', transform: 'scale(1.1)' }}
          transition="all 0.3s"
        />
      )}
      {project.demo && (
        <IconButton
          as="a"
          href={project.demo}
          target="_blank"
          aria-label="Live Demo"
          icon={<FaExternalLinkAlt size="16px" />}
          size="md"
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200', transform: 'scale(1.1)' }}
          transition="all 0.3s"
        />
      )}
    </Box>
  </MotionBox>
);

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website built with React and Chakra UI, showcasing my computer engineering background and technical expertise. Features responsive design, smooth animations, and a sleek dark theme with intuitive navigation.",
      image: "/portfolio-icon.svg",
      technologies: ["React", "TypeScript", "Chakra UI", "Framer Motion"],
      github: "https://github.com/MartinRizk1/Portfolio",
      demo: window.location.origin
    }
  ];

  return (
    <Box id="projects" py={24} bg="black">
      <Container maxW="container.xl">
        <Heading
          textAlign="center"
          mb={16}
          size="2xl"
          color="accent.500"
          letterSpacing="wider"
          fontWeight="bold"
        >
          Featured Project
        </Heading>
        <Box
          maxW="4xl"
          mx="auto"
          px={4}
        >
          <ProjectCard project={projects[0]} />
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;

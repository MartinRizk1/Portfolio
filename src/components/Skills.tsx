import React from 'react';
import { Box, Container, SimpleGrid, Text, Heading, Icon } from '@chakra-ui/react';
import { FaCode, FaMicrochip, FaServer } from 'react-icons/fa';
import { SiCplusplus, SiPython } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface SkillCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
}

const SkillCard = ({ icon, title, description, delay }: SkillCardProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      p={8}
      bg="gray.900"
      borderRadius="sm"
      textAlign="center"
      _hover={{
        transform: "translateY(-10px)",
        bg: "gray.800",
        boxShadow: "xl",
      }}
      border="1px solid"
      borderColor="gray.800"
    >
      <Icon as={icon} w={12} h={12} mb={6} color="accent.500" />
      <Text 
        fontWeight="bold" 
        color="white" 
        fontSize="xl" 
        mb={4}
        letterSpacing="wide"
      >
        {title}
      </Text>
      <Text color="gray.400" fontSize="md">
        {description}
      </Text>
    </MotionBox>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { 
      icon: FaCode,
      title: 'Embedded Systems',
      description: 'Microcontroller programming, RTOS, and firmware development'
    },
    { 
      icon: SiCplusplus,
      title: 'C/C++',
      description: 'System-level programming and hardware interfacing'
    },
    { 
      icon: SiPython,
      title: 'Python',
      description: 'Data processing, automation, and scripting'
    },
    { 
      icon: FaMicrochip,
      title: 'Digital Design',
      description: 'FPGA programming and hardware design'
    },
    { 
      icon: FaServer,
      title: 'System Architecture',
      description: 'Hardware-software system design and integration'
    }
  ];

  return (
    <Box id="skills" py={24} bg="black">
      <Container maxW="container.xl">
        <Heading 
          textAlign="center" 
          mb={16} 
          size="2xl"
          color="accent.500"
          letterSpacing="wider"
          fontWeight="bold"
        >
          Technical Expertise
        </Heading>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 6, md: 8 }}
          maxW="5xl"
          mx="auto"
          px={4}
        >
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={index}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;
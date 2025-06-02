import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    
    return (
        <Flex 
            direction="column"
            minH="100vh"
            bg={bgColor}
            transition="background-color 0.2s"
        >
            <Navbar />
            <Box 
                as="main"
                flex="1"
                w="full"
                mx="auto"
            >
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Layout;
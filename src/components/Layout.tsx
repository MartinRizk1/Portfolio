import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Flex 
            direction="column"
            minH="100vh"
        >
            <Navbar />
            <Box 
                as="main"
                flex="1"
            >
                {children}
            </Box>
            <Footer />
        </Flex>
    );
};

export default Layout;
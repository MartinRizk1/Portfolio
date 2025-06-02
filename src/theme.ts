import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', -apple-system, system-ui, sans-serif",
  },
  colors: {
    black: '#000000',
    accent: {
      500: '#E2B777', // Brighter gold for better contrast
      600: '#C6A87D',
    },
    gray: {
      900: '#0A0A0A',
      800: '#121212',
      700: '#1A1A1A',
      600: '#242424',
      500: '#2B2B2B',
      400: '#A0A0A0', // Lighter for better readability
      300: '#CCCCCC', // Lighter for better readability
      200: '#E0E0E0',
      100: '#F0F0F0',
    }
  },
  components: {
    Text: {
      baseStyle: {
        fontWeight: 'normal',
        letterSpacing: '0.02em',
        lineHeight: 1.7,
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: '0.02em',
        fontWeight: '600',
      },
    },
  },
});

export default theme;
import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: '700',
    fontSize: 'xs',
    before: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'var(--accent)',
      transition: 'background 0.2s ease',
    },
  },
  variants: {
    transparent: {
      fontSize: {xs: 'sm+', md: 'md'},
      color: 'var(--white)',
      backgroundColor: 'transparent',
      letterSpacing: '15px',
      _hover: {
        backgroundColor: 'transparent',
        color: 'var(--accent)',
        cursor: 'pointer',
      },
    },
    solid: {
      color: 'var(--white)',
      backgroundColor: 'var(--accent)',
      borderRadius: '50px',
      paddingY: "1.5rem",
      _hover: {
        backgroundColor: 'var(--accent)',
        filter: 'brightness(1.2)',
      },
    },
  },
});

import { defineStyleConfig } from '@chakra-ui/react';
import { lighten } from '@chakra-ui/theme-tools';

export const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Kumbh Sans, sans-serif',
    fontWeight: '700',
    fontSize: 'md',
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
      _hover: {
        backgroundColor: 'var(--accent)',
        filter: 'brightness(1.2)',
      },
    },
  },
});

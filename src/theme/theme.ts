import { Button } from './Components/Button';
import { extendTheme } from '@chakra-ui/react';
import { numberInputTheme } from './Components/NumberInput';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'var(--deepPurple)',
        fontFamily: 'var(--app-font)',
      },
      // Apply theme font globally
      '*': {
        fontFamily: 'var(--app-font) !important',
      },
    },
  },
  colors: {
    deepPurple: '#1e213f',
    deepBlue: '#161932',
    pinkishRed: '#f87070',
    lightBlue: '#70f3f8',
    purplePink: '#d881f8',
    blueGray: '#d7e0ff',
    white: '#ffffff',
    offWhite: '#eff1fa',
    accent: 'var(--accent)',
  },
  fonts: {
    heading: 'var(--app-font)',
    body: 'var(--app-font)',
    kumbhSans: '"Kumbh Sans", sans-serif',
    robotoSlab: '"Roboto Slab", serif',
    spaceMono: '"Space Mono", monospace',
  },
  fontSizes: {
    xxs: '0.6875rem', // 11px
    xs: '0.75rem', // 12px
    sm: '0.8125rem', // 13px
    'sm+': '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
    '2xl': '1.75rem', // 28px
    '3xl': '2rem;', // 32px
    '4xl': '4rem;', // 64px
    '5xl': '5rem;', // 80px
    '6xl': '6.25rem;', // 100px
  },
  breakpoints: {
    xs: '20rem', // 320px Mobile
    sm: '30rem', // 480px
    md: '48rem', // 768px Tablet
    lg: '62rem', // 992px
    xl: '80rem', // 1280px
    '2xl': '90rem', // 1440px Desktop
  },
  components: {
    Button,
    NumberInput: numberInputTheme,
  },
});

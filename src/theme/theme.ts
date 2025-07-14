import { background, extendTheme, space } from '@chakra-ui/react';

import { Button } from './Components/Button';
import { Heading } from './Components/Heading';
import { numberInputTheme } from './Components/NumberInput';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: '',
        // fontFamily: 'kumbh Sans, sans-serif',
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
  },
  fonts: {
    heading: 'var(--typography-heading)',
    body: 'var(--typography-body)',
    kumbahSans: 'var(--chakra-kumbah-sans)',
    robotoSlab: 'var(--roboto-slab)',
    spaceMono: 'var(--space-mono)',
  },
  typography: {
    fontSizes: {
      xxs: '0.6875em', // 11px
      xs: '0.75em', // 12px
      sm: '0.8125em', // 13px
      'sm+': '0.875em', // 14px
      md: '1em', // 16px
      lg: '1.25em', // 20px
      xl: '1.5em', // 24px
      '2xl': '1.75em', // 28px
      '3xl': '2em', // 32px
      '4xl': '4.5em', // 72px
      '5xl': '5em', // 80px
      '6xl': '6.25em', // 100px
    },
  },

  breakpoints: {
    xs: '20em', // 320px Mobile
    sm: '30em', // 480px
    md: '48em', // 768px Tablet
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '90em', // 1440px Desktop
  },
  components: {
    Heading,
    Button,
    NumberInput: numberInputTheme,
  },
});

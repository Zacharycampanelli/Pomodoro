export const Heading = {
  baseStyle: {
    fontFamily: '--typography-h1-font',
    fontSize: { xs: '5xl', md: '6xl' },
  },
  variants: {
    sans: {
      fontFamily: 'Kumbh Sans, sans-serif',
      fontSize: { sm: '4xl', md: '6xl' },
      letterSpacing: '-3%',
      lineHeight: '120%',
      fontWeight: '700',
    },
    serif: {
      fontFamily: 'Roboto Slab, sans-serif',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      fontWeight: '700',
    },
    mono: {
      fontFamily: 'Space Mono, sans-serif',
      letterSpacing: '-10px',
      lineHeight: 'normal',
      fontWeight: '400',
    },
  },
};

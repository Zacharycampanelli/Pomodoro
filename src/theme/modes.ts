
  // Typography settings for different themes
 export const sansTheme = {
    '--typography-h1-font': `Kumbh Sans, sans-serif`,
    '--typography-h1-size': { sm: '4xl', md: '6xl ' },
    '--typography-h1-spacing': { sm: '-3%', md: '-5px' },
    '--typography-h1-line': { sm: '120%', md: 'normal' },
    '--typography-h1-weight': '700',
  }
  export const serifTheme =  {
    '--typography-h1-font': `'Roboto Slab', sans-serif`,
    '--typography-h1-size': { sm: '5emxl', md: '6xl ' },
    '--typography-h1-spacing': 'normal',
    '--typography-h1-line': 'normal',
    '--typography-h1-weight': '700',
  }
  export const monoTheme = {
    '--typography-h1-font': `'Space Mono', sans-serif`,
    '--typography-h1-size': { sm: '5emxl', md: '6xl ' },
    '--typography-h1-spacing': '-10px',
    '--typography-h1-line': 'normal',
    '--typography-h1-weight': '400',
  }

export const typographyThemes = {
  sans: sansTheme,
  serif: serifTheme,
  mono: monoTheme,
};
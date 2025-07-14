import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

import { typographyThemes } from './modes';

type ColorAccent = 'pinkishRed' | 'lightBlue' | 'purplePink';
type Typography = keyof typeof typographyThemes;

interface ThemeContextProps {
  colorAccent: ColorAccent;
  setColorAccent: (color: ColorAccent) => void;
  typography: Typography;
  setTypography: (typography: Typography) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>({
  colorAccent: 'pinkishRed',
  setColorAccent: () => {},
  typography: 'kumbahSans',
  setTypography: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorAccent, setColorAccent] = useState<ColorAccent>('pinkishRed');
  const [typography, setTypography] = useState<Typography>('kumbahSans');

  // Update CSS variables when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', `var(--${colorAccent})`);
  }, [colorAccent]);

  // Update typography variables when typography changes
  useEffect(() => {
 const theme = typographyThemes[typography];
if (theme) {
  for (const [key, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(`--typography-${key}`, `var(--${value})`);
  }
}
  }, [typography]);

  return (
    <ThemeContext.Provider value={{ colorAccent, setColorAccent, typography, setTypography }}>
      {children}
    </ThemeContext.Provider>
  );
};

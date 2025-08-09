import './index.css';

import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
// import { ThemeProvider } from './theme/ThemeContext.tsx';
import { createRoot } from 'react-dom/client';
import { theme } from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme} resetCSS={true}>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </ChakraProvider>
  </StrictMode>
);

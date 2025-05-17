import './App.css';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div></div>
    </ChakraProvider>
  );
}

export default App;

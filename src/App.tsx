import './App.css';

import { Heading } from '@chakra-ui/react';
import Slider from './components/Slider/Slider';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [time, setTime] = useState(25 * 60); // Default to 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  // You can customize the theme if needed, or just use the default


  return (

      <div>
        <Heading as="h1" size={{ base: '2xl', md: }}>pomodoro</Heading>
        <Slider mode={mode} setMode={setMode} />
      </div>
        );
}

export default App;

import { Box, Container, Heading } from '@chakra-ui/react';

import Logo from './assets/SVG/Logo';
import SegmentedControl from './components/SegmentedControl/SegmentedControl';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  const [time, setTime] = useState(25 * 60); // Default to 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState<'sans' | 'serif' | 'mono'>('mono');
  const items = [
    { value: 'pomodoro', label: 'Pomodoro' },
    { value: 'shortBreak', label: 'Short Break' },
    { value: 'longBreak', label: 'Long Break' },
  ];
  return (
    <Container
      maxWidth={'100vw'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      overflow={'hidden'}
      bg="var(--deepPurple)"
    >
      <Box p={4} mb={4}>
        <Logo />
      </Box>
      <SegmentedControl
        options={items}
        selectedValue={mode}
        onChange={(value) => setMode(value as 'pomodoro' | 'shortBreak' | 'longBreak')}
      />
    </Container>
  );
}

export default App;

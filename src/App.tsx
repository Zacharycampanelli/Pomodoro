import { Box, Button, ButtonGroup, Container, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import Logo from './assets/SVG/Logo';
import SegmentedControl from './components/SegmentedControl/SegmentedControl';
import Timer from './components/Timer';
import { useTimer } from 'react-timer-hook';

export interface TimerControls {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  restart: (expiryTimestamp: Date, autoStart?: boolean) => void;
}
function App() {
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');
  // const [time, setTime] = useState(25 * 60); // Default to 25 minutes in seconds
  // const [isRunning, setIsRunning] = useState(false);
  const items = [
    { value: 'pomodoro', label: 'Pomodoro' },
    { value: 'shortBreak', label: 'Short Break' },
    { value: 'longBreak', label: 'Long Break' },
  ];
  const [timeValues, setTimeValues] = useState({
    pomodoro: 25 * 60, // 25 minutes in seconds
    shortBreak: 5 * 1, // 5 minutes in seconds
    longBreak: 15 * 60, // 15 minutes in seconds
  });

  const getExpiryTime = (secs: number) => {
    const t = new Date();
    t.setSeconds(t.getSeconds() + secs);
    return t;
  };

  const [expiryTime, setExpiryTime] = useState<Date>(() => getExpiryTime(timeValues[mode]));

  const [onExpireHandler, setOnExpireHandler] = useState<() => void>(() => () => {});

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp: expiryTime,
    autoStart: false,
    onExpire: () => onExpireHandler(),
  });

  const timerControls: TimerControls = {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    resume,
    restart,
  };


  const handleModeChange = (newMode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setMode(newMode);
    const newExpiry = getExpiryTime(timeValues[newMode]);
    setExpiryTime(newExpiry);
    restart(newExpiry, false);
  };

 
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            backgroundColor: 'var(--white)',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          {isRunning}
          <button onClick={() => start()}>Start</button>
          <button onClick={() => pause()}>Pause</button>
          <button onClick={() => resume()}>Resume</button>
          <span>{`${hours}:${minutes}:${seconds}`} </span>
        </div>
      </Box>
      <SegmentedControl
        options={items}
        selectedValue={mode}
        onChange={(value) => handleModeChange(value as 'pomodoro' | 'shortBreak' | 'longBreak')}
      />
      <Timer
      
        timerControls={timerControls}
        expiryTime={expiryTime}
        setOnExpire={setOnExpireHandler}

        getExpiryTime={getExpiryTime}
        timeValues={timeValues}
        mode={mode}
      />
    </Container>
  );
}

export default App;

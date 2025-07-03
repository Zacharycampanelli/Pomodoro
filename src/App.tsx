import { Box, Button, ButtonGroup, Container, Heading, Icon } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import Logo from './assets/SVG/Logo';
import SegmentedControl from './components/SegmentedControl/SegmentedControl';
import SettingsIcon from './assets/SVG/SettingsIcon';
import SettingsModal from './components/SettingsModal';
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

export type TimeMode = 'pomodoro' | 'shortBreak' | 'longBreak';
export type TimeValues = Record<TimeMode, number>;
export type TimeLabels = { value: TimeMode; label: string };
function App() {
  const [mode, setMode] = useState<TimeMode>('pomodoro');
  // const [time, setTime] = useState(25 * 60); // Default to 25 minutes in seconds
  // const [isRunning, setIsRunning] = useState(false);
  const modalRef = useRef<{ open: () => void }>(null);
  const labels: TimeLabels[] = [
    { value: 'pomodoro', label: 'Pomodoro' },
    { value: 'shortBreak', label: 'Short Break' },
    { value: 'longBreak', label: 'Long Break' },
  ];
  const [timeValues, setTimeValues] = useState<TimeValues>({
    pomodoro: 25 * 60, // 25 minutes in seconds
    shortBreak: 5 * 60, // 5 minutes in seconds
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
        {/*   */}
      </Box>
      <SegmentedControl
        labels={labels}
        selectedValue={mode}
        onChange={(value) => handleModeChange(value as 'pomodoro' | 'shortBreak' | 'longBreak')}
      />
      <SettingsModal mode={mode} labels={labels} timeValues={timeValues} setTimeValues={setTimeValues} ref={modalRef} />
      <Timer
        timerControls={timerControls}
        expiryTime={expiryTime}
        setOnExpire={setOnExpireHandler}
        getExpiryTime={getExpiryTime}
        timeValues={timeValues}
        mode={mode}
      />
      <Icon as={SettingsIcon} opacity={0.5} boxSize={8} mt="5rem" _hover={{ cursor: 'pointer', opacity: 1 }} onClick={() => modalRef.current?.open()} />
    </Container>
  );
}

export default App;

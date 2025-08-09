import { Box, Center, Container, Icon, useDisclosure } from '@chakra-ui/react';
import type { SettingsState, TimeMode } from './types';
import { useEffect, useRef, useState } from 'react';

import Logo from './assets/SVG/Logo';
import SegmentedControl from './components/SegmentedControl';
import SettingsIcon from './assets/SVG/SettingsIcon';
import SettingsModal from './components/SettingsModal';
import Timer from './components/Timer';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTimer } from 'react-timer-hook';

export type TimeLabels = { value: TimeMode; label: string };
function App() {
  const modalRef = useRef<{ open: () => void }>(null);

const defaultSettings: SettingsState = {

timeValues:{
    pomodoro: 25 * 60, // 25 minutes in seconds
    shortBreak: 5 * 60, // 5 minutes in seconds
    longBreak: 15 * 60, // 15 minutes in seconds
},
  colorTheme: 'pinkishRed',
  fontTheme: 'sans',
  mode: 'pomodoro'
}
const [settings, setSettings] = useLocalStorage<SettingsState>('pomodoro-settings', defaultSettings);
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
  document.documentElement.setAttribute('data-theme', settings.colorTheme);
  document.documentElement.setAttribute('data-font', settings.fontTheme);
}, [settings.colorTheme, settings.fontTheme]);

  const safeTimeValues = settings?.timeValues ?? defaultSettings.timeValues;

  const getExpiryTime = (secs: number) => {
    const t = new Date();
    t.setSeconds(t.getSeconds() + secs);
    return t;
  };

  const [expiryTime, setExpiryTime] = useState<Date>(() => getExpiryTime(safeTimeValues[settings.mode]));

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

  useEffect(() => {
    const newExpiry = getExpiryTime(safeTimeValues[settings.mode]);
    setExpiryTime(newExpiry);
    restart(newExpiry, false);
  }, [settings.timeValues, settings.mode]);

  const handleModeChange = (newMode: 'pomodoro' | 'shortBreak' | 'longBreak') => {
    setSettings((prev) => ({
      ...prev,
      mode: newMode,
    }));
    const newExpiry = getExpiryTime(safeTimeValues[newMode]);
    setExpiryTime(newExpiry);
    restart(newExpiry, false);
  };

  return (
    <Container
      maxW="100dvw"
      minH="100dvh"
      width="100%"
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
      <Center>
        <SegmentedControl
          labels={Object.keys(safeTimeValues)}
          selectedValue={settings.mode}
          onChange={(value) => handleModeChange(value as 'pomodoro' | 'shortBreak' | 'longBreak')}
        />
      </Center>
      <SettingsModal isOpen={isOpen} onClose={onClose} settings={settings} onSettingsChange={setSettings} ref={modalRef} />
      <Timer
        timerControls={timerControls}
        expiryTime={expiryTime}
        setOnExpire={setOnExpireHandler}
        getExpiryTime={getExpiryTime}
        timeValues={safeTimeValues}
        mode={settings.mode}
      />
      <Icon
        as={SettingsIcon}
        mb={4}
        opacity={0.5}
        boxSize={8}
        mt={{xs: '5rem', md: '6rem', xl: '4.5rem'}}
        
        _hover={{ cursor: 'pointer', opacity: 1 }}
        onClick={onOpen}
      />
    </Container>
  );
}

export default App;
function setMode(newMode: string) {
  throw new Error('Function not implemented.');
}


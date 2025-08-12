import { Box, Center, Container, Icon, useDisclosure } from '@chakra-ui/react';
import type { SettingsState, TimeMode } from './types';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Logo from './assets/SVG/Logo';
import SegmentedControl from './components/SegmentedControl';
import SettingsIcon from './assets/SVG/SettingsIcon';
import SettingsModal from './components/SettingsModal';
import Timer from './components/Timer';
import { useLocalStorage } from './hooks/useLocalStorage';
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

export type TimeLabels = { value: TimeMode; label: string };

// Function to apply theme immediately
const applyThemeToDOM = (colorTheme: string, fontTheme: string) => {
  const root = document.documentElement;
  
  // Set data attributes
  root.setAttribute('data-theme', colorTheme);
  root.setAttribute('data-font', fontTheme);
  
  // Also set CSS variables directly as backup
  const colorMap = {
    'pinkishRed': '#f87070',
    'lightBlue': '#70f3f8', 
    'purplePink': '#d881f8'
  };
  
  const fontMap = {
    'sans': '"Kumbh Sans", sans-serif',
    'serif': '"Roboto Slab", serif',
    'mono': '"Space Mono", monospace'
  };
  
  root.style.setProperty('--accent', colorMap[colorTheme as keyof typeof colorMap]);
  root.style.setProperty('--app-font', fontMap[fontTheme as keyof typeof fontMap]);
  
  console.log('Theme applied:', {
    colorTheme,
    fontTheme,
    accentColor: colorMap[colorTheme as keyof typeof colorMap],
    font: fontMap[fontTheme as keyof typeof fontMap],
    dataTheme: root.getAttribute('data-theme'),
    dataFont: root.getAttribute('data-font'),
    accentVar: getComputedStyle(root).getPropertyValue('--accent'),
    fontVar: getComputedStyle(root).getPropertyValue('--app-font')
  });
};

function App() {
  const modalRef = useRef<{ open: () => void }>(null);

  const defaultSettings: SettingsState = {
    timeValues: {
      pomodoro: 25 * 60,
      shortBreak: 5 * 60,
      longBreak: 15 * 60,
    },
    colorTheme: 'pinkishRed',
    fontTheme: 'sans',
    mode: 'pomodoro'
  };

  const [settings, setSettings] = useLocalStorage<SettingsState>('pomodoro-settings', defaultSettings);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Apply theme immediately when component mounts or settings change
  useLayoutEffect(() => {
    applyThemeToDOM(settings.colorTheme, settings.fontTheme);
  }, [settings.colorTheme, settings.fontTheme]);

  // Also apply theme on window load as extra safety
  useEffect(() => {
    const handleLoad = () => {
      applyThemeToDOM(settings.colorTheme, settings.fontTheme);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
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
  }, [settings.timeValues, settings.mode, restart, safeTimeValues]);

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
      <SettingsModal 
        isOpen={isOpen} 
        onClose={onClose} 
        settings={settings} 
        onSettingsChange={setSettings} 
        ref={modalRef} 
      />
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
import { Box, Button, Center, Circle, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useEffect, useState, type FC } from 'react';

import type { TimerControls } from '@/App';

interface TimerProps {
  timerControls: TimerControls;
  expiryTime: Date;
  setOnExpire: (fn: () => void) => void;
  getExpiryTime: (secs: number) => Date;
  timeValues: Record<string, number>;
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
}

type TimerState = 'running' | 'paused' | 'finished' | 'new';

const Timer: FC<TimerProps> = ({ timerControls, expiryTime, setOnExpire, getExpiryTime, timeValues, mode }) => {
  const [timerState, setTimerState] = useState<TimerState>('new');
  const [buttonText, setButtonText] = useState('START');
  const { seconds, minutes, hours } = timerControls;
  const [progress, setProgress] = useState(0);
 
  const updateProgress = () => {
    const totalSeconds = timeValues[mode];
    const remainingSeconds = hours * 3600 + minutes * 60 + seconds;
    const tempprogress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
    setProgress(tempprogress);
  };

  const handleButtonClick = () => {
    if (timerState === 'new') {
      setTimerState('running');
      setButtonText('PAUSE');
      timerControls.start();
    }
    if (timerState === 'running') {
      setTimerState('paused');
      setButtonText('RESUME');
      timerControls.pause();
    }
    if (timerState === 'paused') {
      setTimerState('running');
      setButtonText('PAUSE');
      timerControls.resume();
    }
  };

  const modeChange = async() => {
    await setTimerState('new')
    await  setButtonText('START')
    
  }
  
  const handleTimerExpire = () => {
    // TODO needs to reset timer
    setTimerState('new');
    setButtonText('RESTART');
    console.log(timeValues[mode]);
    console.log(mode);
    const time = getExpiryTime(timeValues[mode]);
    console.log(time);

    timerControls.restart(time, false);
    updateProgress()
  };
  
  useEffect(() => {
    setOnExpire(() => handleTimerExpire);
  }, [setOnExpire]);
  
useEffect(() => {
  updateProgress();
}, [mode, hours, minutes, seconds]);

useEffect(() => {
  modeChange()
}, [mode])

  return (
    <div>
      <Box borderRadius="full" boxShadow="30px 30px 80px #161931" mt={16}>
        <Box
          p="20px"
          borderRadius="full"
          bgGradient="linear(to-tl, #2E325A, #0E112A)"
          boxShadow="-30px -30px 80px rgba(112, 115, 248, 0.25)" // ← Offset upward & left
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
        >
          <Circle
            bg="var(--deepBlue)"
            size="18rem"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress
              value={100 - progress}
              size="17rem"
              thickness=".25rem"
              color="var(--accent)"
              trackColor="transparent"
            >
              <CircularProgressLabel
                color="var(--white)"
                fontWeight="bold"
                textAlign="center"
                display="flex"
                flexDir="column"
              >
                <Center fontSize="6xl">
                  {hours !== undefined && minutes !== undefined && seconds !== undefined
                    ? `${hours ? String(hours).padStart(2, '0:') : ''}${String(minutes).padStart(2, '0')}:${String(
                        seconds
                      ).padStart(2, '0')}`
                    : '00:00:00'}
                </Center>

                <Button variant="transparent" onClick={handleButtonClick}>
                  {buttonText}
                </Button>
              </CircularProgressLabel>
            </CircularProgress>
          </Circle>
        </Box>
      </Box>
    </div>
  );
};

export default Timer;

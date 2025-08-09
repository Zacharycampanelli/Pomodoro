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

    setTimerState('new');
    setButtonText('RESTART');

    const time = getExpiryTime(timeValues[mode]);

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

useEffect(() => {

  setTimerState('new')
  setButtonText('START')
}, [expiryTime])

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
            size={{xs:"18rem",  md: "26rem"}}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress
              value={100 - progress}
              size={{xs:"17rem", md: "25rem"}}
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
                <Center fontSize={{xs: "4xl", md: "6xl"}} marginTop="16px" marginBottom="-12px">
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

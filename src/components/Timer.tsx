import { Box, Button, Center, Circle, CircularProgress, CircularProgressLabel, Container } from '@chakra-ui/react';

import { FC } from 'react';
import type { TimerControls } from '@/App';

interface TimerProps {
  progress: number;
  timerControls: TimerControls;
}

const Timer: FC<TimerProps> = ({ progress, timerControls }) => {

  const { seconds, minutes, hours } = timerControls;
  
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
            <CircularProgress value={100 - progress} size="17rem" thickness=".25rem" color="var(--accent)" trackColor="transparent">
            <CircularProgressLabel color='var(--white)' fontWeight="bold" textAlign="center" display="flex" flexDir="column">
              <Center  fontSize="6xl">
                {hours !== undefined && minutes !== undefined && seconds !== undefined
                ? `${ hours ? String(hours).padStart(2, '0:') : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
                : '00:00:00'}
                </Center>

                <Button variant="transparent">PAUSE</Button>
              </CircularProgressLabel>  
              
            </CircularProgress>
          </Circle>
        </Box>
      </Box>
    </div>
  );
};

export default Timer;

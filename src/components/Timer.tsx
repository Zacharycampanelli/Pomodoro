import { Box, Circle, CircularProgress } from '@chakra-ui/react';

const Timer = () => {
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
            <CircularProgress value={10} size="17rem" thickness=".25rem" color="var(--accent)" trackColor="transparent" />
          </Circle>
        </Box>
      </Box>
    </div>
  );
};

export default Timer;

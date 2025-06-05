import { Flex, SegmentGroup } from '@chakra-ui/react';

import type { FC } from 'react';

interface SliderProps {
  mode: 'pomodoro' | 'shortBreak' | 'longBreak';
  setMode: (mode: SliderProps['mode']) => void;
}

const items = [
  { value: 'pomodoro', label: 'Pomodoro' },
  { value: 'shortBreak', label: 'Short Break' },
  { value: 'longBreak', label: 'Long Break' },
];

const Slider: FC<SliderProps> = ({ mode, setMode }) => {
  return (
    <Flex justifyContent="space-around" alignItems="center" >
      <SegmentGroup.Root
      h="4rem"
      w="75vw"
      borderRadius="50px"
        size="sm" // xs | sm | md | lg
        colorPalette="teal"
        value={mode}
        onValueChange={({value}) => { 
          if(value) setMode(value as SliderProps['mode']);
        }}
        
      >
        <SegmentGroup.Indicator borderRadius="50px" className='sliderIndicator' bgColor={"red.400"}/>
        <SegmentGroup.Items w="1/3" h="100%" items={items} />
      </SegmentGroup.Root>
    </Flex>
  );
};

export default Slider;

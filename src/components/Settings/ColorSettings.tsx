import { Circle, Container, Flex, Text } from '@chakra-ui/react';
import type { Dispatch, FC, SetStateAction } from 'react';
import { type ColorAccent } from '@/theme/ThemeContext';
import { CheckIcon } from '@chakra-ui/icons';

interface ColorSettingsProps {
  unappliedColor: ColorAccent;
  setUnappliedColor: Dispatch<SetStateAction<ColorAccent>>;
}
const ColorSettings: FC<ColorSettingsProps> = ({ unappliedColor, setUnappliedColor }) => {
  return (
    <Flex direction="column" w="full">
      <Text fontSize="xxs" letterSpacing="4.23px" textAlign="center" paddingBottom="4">
        Color
      </Text>
      <Container w="1/2">
        <Flex>
          <Circle
            role="group"
            size="40px"
            bg="pinkishRed"
            mx="16px"
            _hover={{ cursor: 'pointer' }}
            onClick={() => setUnappliedColor('pinkishRed')}
          >
            {unappliedColor === 'pinkishRed' ? <CheckIcon /> : ''}
          </Circle>

          <Circle
            role="group"
            size="40px"
            bg="lightBlue"
            mx="16px"
            _hover={{ cursor: 'pointer' }}
            onClick={() => setUnappliedColor('lightBlue')}
          >
            {unappliedColor === 'lightBlue' ? <CheckIcon /> : ''}
          </Circle>
          <Circle
            role="group"
            size="40px"
            bg="purplePink"
            mx="16px"
            _hover={{ cursor: 'pointer' }}
            onClick={() => setUnappliedColor('purplePink')}
          >
            {unappliedColor === 'purplePink' ? <CheckIcon /> : ''}
          </Circle>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ColorSettings;

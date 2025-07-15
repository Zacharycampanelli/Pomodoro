import { Circle, Container, Flex, Text } from '@chakra-ui/react';
import type { Dispatch, FC, SetStateAction } from 'react';

import { useAppTheme, type Typography } from '@/theme/ThemeContext';

interface FontSettingsProps  {
    unappliedFont: Typography
    setUnappliedFont: Dispatch<SetStateAction<Typography>>
}
const FontSettings:FC<FontSettingsProps> = ({unappliedFont, setUnappliedFont}) => {
    const { typography } = useAppTheme()
  return (
    <Flex direction="column" w="full">
      <Text fontSize="xxs" letterSpacing="4.23px" textAlign="center" paddingBottom="4">
        FONT
      </Text>
      <Container w="1/2">
        <Flex>
          <Circle
            role="group"
            size="40px"
            bg={unappliedFont === 'sans' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setUnappliedFont('sans')}
          >
            <Text
              fontFamily="kumbhSans"
              color={unappliedFont === 'sans' ? 'white' : 'deepPurple'}
              opacity="75%"
              _groupHover={{ color: 'white' }}
            >
              A a
            </Text>
          </Circle>
          <Circle
            role="group"
            size="40px"
            bg={unappliedFont === 'serif' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setUnappliedFont('serif')}
          >
            <Text
              fontFamily="robotoSlab"
              color={unappliedFont === 'serif' ? 'white' : 'deepPurple'}
              opacity="75%"
              _groupHover={{ color: 'white' }}
            >
              A a
            </Text>
          </Circle>
          <Circle
            role="group"
            size="40px"
            bg={unappliedFont === 'mono' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setUnappliedFont('mono')}
          >
            <Text
              fontFamily="spaceMono"
              color={unappliedFont === 'mono' ? 'white' : 'deepPurple'}
              opacity="75%"
              _groupHover={{ color: 'white' }}
            >
              A a
            </Text>
          </Circle>
        </Flex>
      </Container>
    </Flex>
  );
};

export default FontSettings;

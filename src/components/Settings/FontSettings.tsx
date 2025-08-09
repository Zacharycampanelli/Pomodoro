import { Box, Circle, Container, Flex, Text } from '@chakra-ui/react';
import type { Dispatch, FC, SetStateAction } from 'react';

import type { FontTheme } from '@/types';

// import { useAppTheme, type Typography } from '@/theme/ThemeContext';

interface FontSettingsProps  {
    unappliedFont: FontTheme
    setUnappliedFont: Dispatch<SetStateAction<FontTheme>>
}
const FontSettings:FC<FontSettingsProps> = ({unappliedFont, setUnappliedFont}) => {
    // const { typography } = useAppTheme()
  return (
    <Flex direction={{xs: "column", md: "row"}} w="full" alignItems="center" justifyContent={{md: "space-between"}} py={{md: "4"}}>
      <Text fontSize={{ xs: "xxs", lg: "sm"}} letterSpacing="4.23px" textAlign="center" paddingBottom={{xs: "4", md: "0"}}>
        FONT
      </Text>
      <Box w="1/2" justifySelf={{md: "end"}} mx={{xs: "16px", md: "0"}}>
        <Flex>
          <Circle
            role="group"
            size="40px"
            bg={unappliedFont === 'sans' ? 'deepBlue' : 'offWhite'}
            mx="12px"
            _hover={{ bg: 'deepBlue', cursor: 'pointer' }}
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
            mx="12px"
            _hover={{ bg: 'deepBlue', cursor: 'pointer' }}
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
            mx="12px"
            _hover={{ bg: 'deepBlue', cursor: 'pointer'}}
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
      </Box>
    </Flex>
  );
};

export default FontSettings;

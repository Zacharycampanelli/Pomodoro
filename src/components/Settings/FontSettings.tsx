import { Circle, Container, Flex, Text } from '@chakra-ui/react';

import { useAppTheme } from '@/theme/ThemeContext';

const FontSettings = () => {
  const { typography, setTypography } = useAppTheme();
  console.log(typography);
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
            bg={typography === 'sans' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setTypography('sans')}
          >
            <Text
              fontFamily="kumbhSans"
              color={typography === 'sans' ? 'white' : 'deepPurple'}
              opacity="75%"
              _groupHover={{ color: 'white' }}
            >
              A a
            </Text>
          </Circle>
          <Circle
            role="group"
            size="40px"
            bg={typography === 'serif' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setTypography('serif')}
          >
            <Text
              fontFamily="robotoSlab"
              color={typography === 'serif' ? 'white' : 'deepPurple'}
              opacity="75%"
              _groupHover={{ color: 'white' }}
            >
              A a
            </Text>
          </Circle>
          <Circle
            role="group"
            size="40px"
            bg={typography === 'mono' ? 'deepBlue' : 'offWhite'}
            mx="16px"
            _hover={{ bg: 'deepBlue' }}
            onClick={() => setTypography('mono')}
          >
            <Text
              fontFamily="spaceMono"
              color={typography === 'mono' ? 'white' : 'deepPurple'}
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

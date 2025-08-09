import type { Dispatch, FC, SetStateAction } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import CustomInput from '../CustomInput';
// If you already have a TimeValues type elsewhere, import it and delete the line below.
type TimeValues = Record<string, number>;


interface TimeSettingsProps {
  unappliedTimeValues: TimeValues;
  setUnappliedTimeValues: Dispatch<SetStateAction<TimeValues>>;
}

const TimeSettings: FC<TimeSettingsProps> = ({ unappliedTimeValues, setUnappliedTimeValues }) => {
  // Derive keys from the source of truth and sanitize
  const keys = Object.keys(unappliedTimeValues).filter(Boolean);

  return (
    <>
      <Text
        fontSize={{ xs: 'xxs', lg: 'sm' }}
        letterSpacing="4.23px"
        textAlign={{ xs: 'center', md: 'left' }}
        paddingY={{ xs: '2', lg: '4' }}
      >
        TIME (MINUTES)
      </Text>

      <Flex direction={{ xs: 'column', md: 'row' }} justifyContent={{ lg: 'start' }}>
        {keys.map((key) => (
          <Flex
            alignItems={{ xs: 'center', lg: 'start' }}
            key={key}
            direction={{ xs: 'row', md: 'column' }}
          >
            <Text
              color="deepBlue"
              opacity="40%"
              fontSize="xs"
              w={{ xs: '50%', md: '80%' }}
              mr={{ xs: '8', md: '0' }}
              alignSelf={{ md: 'center' }}
            >
              {key}
            </Text>

            <CustomInput
              // your CustomInput previously expected these props
              setting={key}
              unappliedTimeValues={unappliedTimeValues[key]}
              setUnappliedTimeValues={setUnappliedTimeValues}
            />
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default TimeSettings;
import type { Dispatch, FC, SetStateAction } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import CustomInput from '../CustomInput';
import type { TimeValues } from '@/types';

interface TimeSettingsProps {
  unappliedTimeValues: TimeValues;
  setUnappliedTimeValues: Dispatch<SetStateAction<TimeValues>>;
}

const TimeSettings: FC<TimeSettingsProps> = ({ unappliedTimeValues, setUnappliedTimeValues }) => {

  const keys = (Object.keys(unappliedTimeValues) as (keyof TimeValues)[])
  .filter((k): k is keyof TimeValues => k in unappliedTimeValues);
  
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
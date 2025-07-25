import type { Dispatch, FC, SetStateAction } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import type { TimeLabels, TimeValues } from '@/App';

import CustomInput from '../CustomInput';

interface TimeSettingsProps {
  labels: TimeLabels[];
  unappliedTimeValues: TimeValues;
  setUnappliedTimeValues: Dispatch<SetStateAction<TimeValues>>;
}

const TimeSettings: FC<TimeSettingsProps> = ({ labels, unappliedTimeValues, setUnappliedTimeValues }) => {
  return (
    <>
      <Text fontSize="xxs" letterSpacing="4.23px" textAlign="center" paddingBottom="4">
        TIME (MINUTES)
      </Text>

      {labels.map((label, i) => (
        <Flex justifyContent="space-between" alignItems="center" key={i++}>
          <Text color="deepBlue" opacity="40%" fontSize="xs" w="50%" mr="8">
            {label.label}
          </Text>
          <CustomInput
            setting={label.value}
            unappliedTimeValues={unappliedTimeValues[label.value]}
            setUnappliedTimeValues={setUnappliedTimeValues}
          />
        </Flex>
      ))}
    </>
  );
};

export default TimeSettings;

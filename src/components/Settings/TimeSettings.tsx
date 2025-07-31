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
      <Text fontSize={{ xs: "xxs", lg: "sm"}} letterSpacing="4.23px" textAlign={{ xs: 'center', md: 'left' }} paddingY={{xs: "2", lg: "4"}}>
        TIME (MINUTES)
      </Text>
      <Flex direction={{ xs: 'column', md: 'row' }} justifyContent={{lg: "start"}}>
        {labels.map((label, i) => (
          <Flex alignItems={{xs: "center", lg: "start"}} key={i++} direction={{xs: "row", md: "column"}} >
            <Text color="deepBlue" opacity="40%" fontSize="xs" w={{xs: "50%", md: "80%"}} mr={{xs: "8", md: "0"}} alignSelf={{md: "center"}}>
              {label.label}
            </Text>
            <CustomInput
              setting={label.value}
              unappliedTimeValues={unappliedTimeValues[label.value]}
              setUnappliedTimeValues={setUnappliedTimeValues}
            />
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default TimeSettings;

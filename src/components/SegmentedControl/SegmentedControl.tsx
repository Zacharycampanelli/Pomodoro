import { Box, Button, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';

import type { FC } from 'react';

interface SegmentedControlProps {
  options?: { value: string; label: string }[];
  onChange: (value: string) => void;
  selectedValue?: string;
  
}

const RadioSegment = ({ value, label, radioProps }: { value: string; label: string; radioProps: any }) => {
  const { getInputProps, getRadioProps, state } = useRadio({
    value,
    ...radioProps,
  });
  const inputProps = getInputProps();
  const radioPropsFinal = getRadioProps();

  return (
    <Box as="label" >
      <input {...inputProps} />
      <Button
      {...radioPropsFinal}
      w="8rem"
        as="div"
        variant='outline'
        color="var(--blueGray)"
        size="sm"
        h="4rem"
        py="2"
      px="6"
        borderRadius="50px"
        borderColor="transparent"
        cursor="pointer"
        _checked={{
          bg: 'var(--accent)',
          color: 'var(--deepPurple)',
          borderColor: 'var(--accent)',
        }}
        
      >
        {label}
      </Button>
    </Box>
  );
};

const SegmentedControl: FC<SegmentedControlProps> = ({ options, selectedValue, onChange }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mode',
    value: selectedValue,
    onChange: onChange,
  });
  if (!options || options.length === 0) return null;

  const group = getRootProps();

  return (
    <HStack
      {...group}
      spacing="2"
      borderRadius='50px'
      borderWidth="1px"
      borderColor="transparent"
      p="2"
      h="4rem"
      display="flex"
      justifyContent="space-between"
      bg="var(--deepBlue)"
      w="85vw"
    >
      {options?.map((option) => {
        const radio = getRadioProps({ value: option.value });
        return <RadioSegment key={option.value} value={option.value} label={option.label} radioProps={radio} />;
      })}
    </HStack>
     );
};

export default SegmentedControl;

import { Box, Button, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';

import type { FC } from 'react';

interface SegmentedControlProps {
  labels?: { value: string; label: string }[];
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
      
        as="div"
        variant='outline'
        color="var(--blueGray)"
        size="sm"
        h="4rem"
        py="2"
      // px="6"
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

const SegmentedControl: FC<SegmentedControlProps> = ({ labels, selectedValue, onChange }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'mode',
    value: selectedValue,
    onChange: onChange,
  });
  if (!labels || labels.length === 0) return null;

  const group = getRootProps();

  return (
    <HStack
      {...group}
      spacing="2"
      borderRadius='50px'
      borderWidth="1px"
      borderColor="transparent"
      h="4rem"
      display="flex"
      justifyContent="space-between"
      bg="var(--deepBlue)"
      maxW="85vw"
    >
      {labels?.map((label) => {
        const radio = getRadioProps({ value: label.value });
        return <RadioSegment key={label.value} value={label.value} label={label.label} radioProps={radio} />;
      })}
    </HStack>
     );
};

export default SegmentedControl;

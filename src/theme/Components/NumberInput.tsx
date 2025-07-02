import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { numberInputAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  stepper: {
    width: '2rem',
  },
});

const variants = {
  custom: definePartsStyle({
    field: {
      backgroundColor: 'offWhite',
      fontWeight: 'bold',
      fontSize: '14px',
      padding: '4px',
    },
    stepper: {
      width: '2rem',
      padding: '4px',
    },
  }),
};

export const numberInputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'custom',
  },
});

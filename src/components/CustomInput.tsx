import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"

import ArrowDown from "@/assets/SVG/ArrowDown"
import ArrowUp from "@/assets/SVG/ArrowUp"

const CustomInput = () => {
  return (
    <NumberInput>
      <NumberInputField  fontFamily="" fontWeight="bold" fontSize="14px" bg={'var(--offWhite)'} border="none" />
      <NumberInputStepper w="2rem">
        <NumberIncrementStepper border="none" pt="1">
            <ArrowUp />
        </NumberIncrementStepper>
        <NumberDecrementStepper border="none" pb="1">
            <ArrowDown />
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  )
}

export default CustomInput

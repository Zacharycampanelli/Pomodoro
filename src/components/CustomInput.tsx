import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"

import ArrowDown from "@/assets/SVG/ArrowDown"
import ArrowUp from "@/assets/SVG/ArrowUp"
import type { FC } from "react";

interface CustomInputProps {
  timeValues: 
  setTimeValues: () => void;
}

const CustomInput:FC<CustomInputProps> = ({timeValues, setTimeValues}) => {
  return (
    <NumberInput>
      <NumberInputField  value={timeValues.} />
      <NumberInputStepper>
        <NumberIncrementStepper>
            <ArrowUp />
        </NumberIncrementStepper>
        <NumberDecrementStepper>
            <ArrowDown />
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  )
}

export default CustomInput

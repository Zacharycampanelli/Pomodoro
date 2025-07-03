import type { Dispatch, FC, SetStateAction } from "react";
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react"
import type { TimeMode, TimeValues } from "@/App";

import ArrowDown from "@/assets/SVG/ArrowDown"
import ArrowUp from "@/assets/SVG/ArrowUp"
import type { SettingsProps } from "./SettingsModal";
import { time } from "console";

interface CustomInputProps {
  setting: TimeMode;
  timeValue: number;
  setTimeValues: Dispatch<SetStateAction<TimeValues>>;
}
const CustomInput:FC<CustomInputProps> = ({setting, timeValue, setTimeValues}) => {
const convertToMinutes = (value: number) => {
    return value / 60;
}  

return (
    <NumberInput  value={convertToMinutes(timeValue)}>
      <NumberInputField margin="0.3rem" padding="1rem" />
      <NumberInputStepper>
        <NumberIncrementStepper onClick={() => {
            setTimeValues((prev) => ({
                ...prev,
                [setting]: (prev[setting] + 60)
            }))
        }}>
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

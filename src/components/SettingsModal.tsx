import { forwardRef, useImperativeHandle, type Dispatch, type FC, type SetStateAction } from 'react';
import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import type { TimeLabels, TimeMode, TimeValues } from '@/App';

import CloseIcon from '@/assets/SVG/CloseIcon';
import CustomInput from './CustomInput';

export interface SettingsProps {
    mode: TimeMode;
  labels: TimeLabels[];
  timeValues: TimeValues;
  setTimeValues: Dispatch<SetStateAction<TimeValues>>;
}

const SettingsModal = forwardRef<{open: () => void}, SettingsProps>(({mode, labels, timeValues, setTimeValues}, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

//   Expose 'onOpen' function to parent
useImperativeHandle(ref, () => ({
    open: onOpen,
  }));

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <Divider />
        <ModalCloseButton>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <Text fontSize="xxs" letterSpacing="4.23px" textAlign="center" paddingBottom="4">
            TIME (MINUTES)
          </Text>
          
          { labels.map((label) => (
            
              <Flex justifyContent="space-between" alignItems="center">
            <Text color="deepBlue" opacity="40%" fontSize="xs">
              {label.label}
            </Text>
            <CustomInput setting={label.value} timeValue={timeValues[label.value]} setTimeValues={setTimeValues} />
          </Flex>
          
      )  )}
          
          
          <h2>FONT</h2>
          <h2>COLOR</h2>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );

}
);

export default SettingsModal;

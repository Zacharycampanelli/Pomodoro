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

import CloseIcon from '@/assets/SVG/CloseIcon';
import CustomInput from './CustomInput';
import type { FC } from 'react';

interface SettingsModalProps {
  timeValues: number;
  setTimeValues: number;
}

const SettingsModal:FC<SettingsModalProps> = ({timeValues, setTimeValues}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <Divider />
        <ModalCloseButton onClick={onClose}>
          <CloseIcon />
        </ModalCloseButton>
        <ModalBody>
          <Text fontSize="xxs" letterSpacing="4.23px" textAlign="center" paddingBottom="4">
            TIME (MINUTES)
          </Text>
          <Flex justifyContent="space-between" alignItems="center">
            <Text color="deepBlue" opacity="40%" fontSize="xs">
              pomodoro
            </Text>
            <CustomInput />
          </Flex>
          <h2>FONT</h2>
          <h2>COLOR</h2>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;

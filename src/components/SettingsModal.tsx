import { forwardRef, useImperativeHandle, useState, type Dispatch, type FC, type SetStateAction } from 'react';
import {
  Button,
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
import TimeSettings from './Settings/TimeSettings';
import FontSettings from './Settings/FontSettings';
import ColorSettings from './Settings/ColorSettings';
import { useAppTheme, type ColorAccent, type Typography } from '@/theme/ThemeContext';

export interface SettingsProps {
  mode: TimeMode;
  labels: TimeLabels[];
  timeValues: TimeValues;
  setTimeValues: Dispatch<SetStateAction<TimeValues>>;
}

const SettingsModal = forwardRef<{ open: () => void }, SettingsProps>(
  ({ mode, labels, timeValues, setTimeValues }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {colorAccent, setColorAccent, typography, setTypography} = useAppTheme();
    
    const [unappliedTimeValues, setUnappliedTimeValues] = useState(timeValues);
    const [unappliedFont, setUnappliedFont] = useState<Typography>(typography);
    const [unappliedColor, setUnappliedColor] = useState<ColorSettings>(colorAccent);
    //   Expose 'onOpen' function to parent
    useImperativeHandle(ref, () => ({
      open: onOpen,
    }));

    const handleModalClose = () => {
      setUnappliedTimeValues(timeValues);
      onClose();
    };

    // TODO make button say start instead of pause when updating
    const applySettingsUpdate = () => {
      setTimeValues(unappliedTimeValues);
      applyFontUpdate();
      applyColorUpdate()
      onClose();
    };
   
    const applyFontUpdate = () => {
      if (unappliedFont !== typography) 
        setTypography(unappliedFont);
      
    };

    const applyColorUpdate = () => {
        if(unappliedColor !== colorAccent)
            setColorAccent(unappliedColor)
    }

    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <Divider />
          <ModalCloseButton>
            <CloseIcon />
          </ModalCloseButton>
          <ModalBody>
            <TimeSettings
              labels={labels}
              unappliedTimeValues={unappliedTimeValues}
              setUnappliedTimeValues={setUnappliedTimeValues}
            />
            <Divider my="4" />
            <FontSettings unappliedFont={unappliedFont} setUnappliedFont={setUnappliedFont} />
            <Divider my="4" />
            <ColorSettings unappliedColor={unappliedColor} setUnappliedColor={setUnappliedColor} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={applySettingsUpdate}>Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default SettingsModal;

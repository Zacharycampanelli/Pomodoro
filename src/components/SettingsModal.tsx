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
  useDisclosure
} from '@chakra-ui/react';
import type { TimeLabels, TimeMode, TimeValues } from '@/App';

import CloseIcon from '@/assets/SVG/CloseIcon';
import CustomInput from './CustomInput';
import TimeSettings from './Settings/TimeSettings';
import FontSettings from './Settings/FontSettings';
import ColorSettings from './Settings/ColorSettings';
import { useAppTheme, type ColorAccent, type Typography } from '@/theme/ThemeContext';
import type { SettingsState } from '@/types';

export interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SettingsState;
  onSettingsChange: (newSettings: SettingsState) => void;
  label: TimeLabels[];
}

const SettingsModal = forwardRef<{ open: () => void }, SettingsProps>(
  ({ isOpen, onClose, settings, onSettingsChange, label }, ref) => {

    const { colorAccent, setColorAccent, typography, setTypography } = useAppTheme();

    const [unappliedTimeValues, setUnappliedTimeValues] = useState(settings.timeValues);
    const [unappliedFont, setUnappliedFont] = useState<Typography>(typography);
    const [unappliedColor, setUnappliedColor] = useState<ColorSettings>(colorAccent);
    //   Expose 'onOpen' function to parent
    useImperativeHandle(ref, () => ({
      open: () => {},
    }));

    const handleModalClose = () => {
      setUnappliedTimeValues(settings.timeValues);
      onClose();
    };

    // TODO make button say start instead of pause when updating
    const applySettingsUpdate = () => {
      onSettingsChange(
        {
          ...settings,
          timeValues: unappliedTimeValues,
          colorTheme: unappliedColor,
          fontTheme: unappliedFont,
        }
      );
      applyFontUpdate();
      applyColorUpdate();
      onClose();
    };

    const applyFontUpdate = () => {
      if (unappliedFont !== typography) setTypography(unappliedFont);
    };

    const applyColorUpdate = () => {
      if (unappliedColor !== colorAccent) setColorAccent(unappliedColor);
    };

    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent
          maxW="none"
          w={{ xs: '90vw', md: '70vw', xl: '30vw' }}
          minH={{ xs: '60vh', md: '20vh' }}
          my="auto"
          py={{ md: '2' }}
          borderRadius="xl"
        >
          <ModalHeader fontSize="lg">Settings</ModalHeader>
          <Divider />
          <ModalCloseButton>
            <CloseIcon />
          </ModalCloseButton>
          <ModalBody>
            <TimeSettings
              labels={label}
              unappliedTimeValues={unappliedTimeValues}
              setUnappliedTimeValues={setUnappliedTimeValues}
            />
            <Divider my="4" />
            <FontSettings unappliedFont={unappliedFont} setUnappliedFont={setUnappliedFont} />
            <Divider my="4" />
            <ColorSettings unappliedColor={unappliedColor} setUnappliedColor={setUnappliedColor} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={applySettingsUpdate} pos="absolute" left="0" right="0" bottom="-5" w="28%" mx="auto">
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
);

export default SettingsModal;

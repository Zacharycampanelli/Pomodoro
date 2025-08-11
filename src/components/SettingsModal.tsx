import { forwardRef, useImperativeHandle, useState, type Dispatch, type FC, type SetStateAction } from 'react';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

import CloseIcon from '@/assets/SVG/CloseIcon';
import TimeSettings from './Settings/TimeSettings';
import FontSettings from './Settings/FontSettings';
import ColorSettings from './Settings/ColorSettings';
import type { ColorTheme, FontTheme, SettingsState } from '@/types';

export interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  settings: SettingsState;
  onSettingsChange: (newSettings: SettingsState) => void;
}

const SettingsModal = forwardRef<{ open: () => void }, SettingsProps>(
  ({ isOpen, onClose, settings, onSettingsChange }, ref) => {
    // const { settings, setColorAccent, typography, setTypography } = useAppTheme();

    const [unappliedTimeValues, setUnappliedTimeValues] = useState<TimeValues>(settings.timeValues);
    const [unappliedFont, setUnappliedFont] = useState<FontTheme>(settings.fontTheme);
    const [unappliedColor, setUnappliedColor] = useState<ColorTheme>(settings.colorTheme);
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
      onSettingsChange({
        ...settings,
        timeValues: unappliedTimeValues,
        colorTheme: unappliedColor,
        fontTheme: unappliedFont,
      });

      onClose();
    };

    const applyFontUpdate = () => {
      if (unappliedFont !== settings.fontTheme) onSettingsChange({ ...settings, fontTheme: unappliedFont });
    };

    const applyColorUpdate = () => {
      if (unappliedColor !== settings.colorTheme) onSettingsChange({ ...settings, colorTheme: unappliedColor });
    };

    return (
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent
          maxW="none"
          w={{ xs: '90vw', md: '70vw', xl: '30vw' }}
          color="deepBlue"
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
            <TimeSettings unappliedTimeValues={unappliedTimeValues} setUnappliedTimeValues={setUnappliedTimeValues} />
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

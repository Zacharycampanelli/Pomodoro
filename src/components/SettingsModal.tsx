import {
    Button,
    Divider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';

import CloseIcon from '@/assets/SVG/CloseIcon';

const SettingsModal = () => {
 
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <Divider />
        <ModalCloseButton>
            <Button variant='unstyled' onClick={onClose}>
                <CloseIcon/>
                </Button>
                </ModalCloseButton>
        <ModalBody>
            <h2>TIME (MINUTES)</h2>
            <h2>FONT</h2>
            <h2>COLOR</h2>            
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;

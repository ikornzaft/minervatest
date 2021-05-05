import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Input,
  Button
} from '@chakra-ui/react';

const CustomDrawer = ({ activeDrawer, drawerHeader, drawerPosition, focusElement }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Drawer
      isOpen={activeDrawer}
      placement={drawerPosition}
      onClose={onClose}
      finalFocusRef={focusElement}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{drawerHeader}</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { CustomDrawer };

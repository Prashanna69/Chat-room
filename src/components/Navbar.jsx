import { ViewOffIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { IoFingerPrintSharp, IoEllipse, IoLogOut } from "react-icons/io5";

import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //

  const [value, setValue] = useState("active");
  //

  const navigate = useNavigate();

  const SignOut = () => {
    return signOut(auth);
  };

  const avtarIcon = useMemo(() => {
    if (value === "dnd") return <Icon as={IoEllipse} color="red.600" />;
    if (value === "hide")
      return <ViewOffIcon color="black" bg="gray.200" borderRadius="2rem" />;
    return <Icon as={IoEllipse} color="green.400" />;
  }, [value]);

  return (
    <>
      <Flex as="nav" bg="#D8D9DA" p="1.5rem" wrap="wrap" alignItems="center">
        <IoFingerPrintSharp size="4rem" color="black" />
        <Heading>Chat-Room</Heading>
        <Spacer />
        <HStack spacing="1rem">
          <Menu>
            <MenuButton transition="all 0.5s">
              <Avatar size="md">
                <AvatarBadge boxSize="1.25em" border="none">
                  {avtarIcon}
                </AvatarBadge>
              </Avatar>
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuOptionGroup
                  value={value}
                  onChange={(value) => setValue(value)}
                  title="Status"
                >
                  <MenuItemOption value="active">
                    <Flex align="center" gap="5px">
                      <Icon as={IoEllipse} color="green.400" />
                      Active
                    </Flex>
                  </MenuItemOption>
                  <Divider />
                  <MenuItemOption value="dnd">
                    <Flex align="center" gap="5px">
                      <Icon as={IoEllipse} color="red.600" />
                      Don't disturb
                    </Flex>
                  </MenuItemOption>
                  <Divider />
                  <MenuItemOption value="hide">
                    <Flex align="center" gap="5px">
                      <Icon as={ViewOffIcon} />
                      Hidden
                    </Flex>
                  </MenuItemOption>
                </MenuOptionGroup>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Log Out?</ModalHeader>
              <ModalCloseButton _hover={{ bg: "red.400" }} />
              <Divider />
              <ModalBody as="b">Are you sure?</ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="blackAlpha"
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  colorScheme="red"
                  leftIcon={<IoLogOut />}
                  onClick={() => {
                    auth.signOut();
                    localStorage.clear("email");
                    navigate("/");
                  }}
                >
                  Log out
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button colorScheme="blackAlpha" onClick={onOpen}>
            Log out
          </Button>
        </HStack>
      </Flex>
    </>
  );
}

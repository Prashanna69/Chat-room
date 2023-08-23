import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  IoSearchOutline,
  IoCallOutline,
  IoVideocamOutline,
  IoEllipsisVerticalOutline,
  IoTrashOutline,
  IoVolumeMuteOutline,
  IoWarningOutline,
  IoEllipse,
  IoSend,
} from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <Box bg="#D8D9DA" p="1rem 2rem">
        <Grid templateColumns="1fr 3fr" gap="0.02rem">
          <Box
            bg="#272829"
            height="100vh"
            borderRadius="2rem 0 0 1rem"
            p="1.4rem"
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<IoSearchOutline color="gray" />}
              />
              <Input
                type="search"
                bg="#1f1f1f"
                borderRadius="1rem"
                color="gray.300"
                placeholder="Search..."
                border="none"
              />
            </InputGroup>
            <Card
              mt="3rem"
              p="0.5rem"
              bg="#1f1f1f"
              borderRadius="1rem"
              _hover={{ background: "#1f1f2f" }}
              cursor="pointer"
            >
              <Flex align="center" gap="1rem">
                <Avatar size="xs" />
                <Text as="b" color="white">
                  John
                </Text>
                <Spacer />
                <Text color="GrayText" fontSize="0.8rem" mt="0.8rem">
                  09:10
                </Text>
                <IoEllipse color="blue" size={10} />
              </Flex>
            </Card>
          </Box>
          <Box bg="#272829" height="100vh" borderRadius="0 2rem 1rem 0">
            <Box bg="#1f1f1f" p="0.8rem 2rem" borderRadius="0 2rem 0 0">
              <Flex align="center" gap="1rem">
                <Avatar size="sm" />
                <Text as="b" color="white">
                  John
                </Text>
                <Spacer />

                <IoCallOutline color="white" cursor="pointer" />

                <IoVideocamOutline color="white" cursor="pointer" />
                <Menu>
                  <MenuButton>
                    <IoEllipsisVerticalOutline color="white" />
                  </MenuButton>
                  <MenuList bg="#272829" border="1px dashed black">
                    <MenuGroup title="Option" color="white">
                      <MenuItem
                        icon={<EditIcon color="white" />}
                        bg="#272829"
                        color="white"
                        _hover={{ background: "#1f1f1f" }}
                      >
                        Marked as Read
                      </MenuItem>
                      <Divider color="gray" />
                      <MenuItem
                        icon={<IoSearchOutline color="white" />}
                        bg="#272829"
                        color="white"
                        _hover={{ background: "#1f1f1f" }}
                      >
                        Search Chat
                      </MenuItem>
                      <Divider color="gray" />
                      <MenuItem
                        icon={<IoTrashOutline color="white" />}
                        bg="#272829"
                        color="white"
                        _hover={{ background: "#1f1f1f" }}
                      >
                        Delete
                      </MenuItem>
                      <Divider color="gray" />
                      <MenuItem
                        icon={<IoVolumeMuteOutline />}
                        bg="#272829"
                        color="white"
                        _hover={{ background: "#1f1f1f" }}
                      >
                        Mute
                      </MenuItem>
                      <Divider color="gray" />
                      <MenuItem
                        icon={<IoWarningOutline color="red" />}
                        bg="#272829"
                        color="red"
                        _hover={{ background: "#1f1f1f" }}
                      >
                        Block
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

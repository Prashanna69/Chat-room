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
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
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
  IoSendSharp,
} from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <Box bg="#D8D9DA" p="1rem 2rem">
        <Grid templateColumns="1fr 3fr" gap="0.02rem">
          <Box
            bg="#272828"
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
                _hover={{ boxShadow: "2px 10px 10px black" }}
                transition="0.4s"
              />
            </InputGroup>
            <Card
              mt="3rem"
              p="0.5rem"
              bg="#1f1f1f"
              borderRadius="1rem"
              _hover={{ background: "#1f1f2f", transition: "0.4s" }}
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
          <Box bg="#272829" minH="100vh" borderRadius="0 2rem 1rem 0">
            <Flex flexDirection="column">
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
              <Box bg="red">
                <Box></Box>
              </Box>
              <Flex align="center">
                <Input
                  type="text"
                  bg="#1f1f1f"
                  borderRadius="1rem 0 1rem 0"
                  color="gray.300"
                  placeholder="Message..."
                  border="none"
                />
                <IoSendSharp
                  color="gray"
                  style={{
                    margin: "1rem",
                    height: "24px",
                    width: "30px",
                    cursor: "pointer",
                  }}
                />
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

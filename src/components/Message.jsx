// Importing necessary dependencies from Chakra UI and React Icons
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  Spacer,
  Text,
  Input,
} from "@chakra-ui/react";
import {
  IoCallOutline,
  IoVideocamOutline,
  IoEllipsisVerticalOutline,
  IoSendSharp,
} from "react-icons/io5";
import Menu_item from "./Menu_Item"; // Importing a component named Menu_Item
import Message_bubble from "./Message_bubble"; // Importing a component named Message_bubble

// Defining the Message component
export default function Message() {
  return (
    <>
      {/* Main container for the message section */}
      <Box
        bg="#272829"
        maxH="100vh"
        borderRadius="0 2rem 1rem 0"
        position="relative"
      >
        {/* Flex container with column layout */}
        <Flex flexDirection="column">
          {/* Header section */}
          <Box bg="#1f1f1f" p="0.8rem 2rem" borderRadius="0 2rem 0 0">
            {/* Header content */}
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
                {/* Menu items */}
                <Menu_item />
                {/*  */}
              </Menu>
            </Flex>
          </Box>
          {/* Message bubbles */}
          <Message_bubble />

          {/* Input section */}
          <Flex align="center" position="absolute" bottom="0" minW="100%">
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
    </>
  );
}

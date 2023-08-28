// Importing necessary dependencies from Chakra UI and React Icons
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Card,
  Flex,
  Avatar,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { IoSearchOutline, IoEllipse } from "react-icons/io5";

// Defining the Sidebar component
export default function Sidebar() {
  return (
    <>
      {/* Main container with background, height, and border radius */}
      <Box bg="#272828" height="100vh" borderRadius="2rem 0 0 1rem" p="1.4rem">
        {/* Input group for search */}
        <InputGroup>
          {/* Left element with search icon */}
          <InputLeftElement
            pointerEvents="none"
            children={<IoSearchOutline color="gray" />}
          />
          {/* Search input */}
          <Input
            type="search"
            bg="#1f1f1f"
            borderRadius="1rem"
            color="gray.300"
            placeholder="Search..."
            border="none"
            _hover={{ boxShadow: "2px 10px 10px black" }}
            transition="0.4s"
            _focus={{ boxShadow: "2px 10px 10px black" }}
          />
        </InputGroup>
        {/* Card container */}
        <Card
          mt="3rem"
          p="0.5rem"
          bg="#1f1f1f"
          borderRadius="1rem"
          _hover={{ background: "#1f1f2f", transition: "0.4s" }}
          cursor="pointer"
        >
          {/* Flex container for user info */}
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
    </>
  );
}

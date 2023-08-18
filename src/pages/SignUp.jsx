import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";

import {
  IoPersonCircle,
  IoLockClosed,
  IoLockOpen,
  IoMail,
  IoFingerPrintSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function SignUp() {
  return (
    <>
      <Box w="auto" minH="100vh" bgGradient="linear(to-r, #ffc371 20%,#36d1dc)">
        <Flex
          align="center"
          justify="center"
          minHeight="100vh"
          justifyItems="center"
        >
          <Box p="2rem">
            <FormControl isRequired>
              <Flex alignItems="center" flexDirection="column">
                <IoFingerPrintSharp size="4rem" color="black" />
                <Flex alignItems="center" gap="0.5rem" mt="2rem">
                  <IoPersonCircle size="2.5rem" color="gray" />
                  <Input
                    type="text"
                    placeholder="Username"
                    borderRadius="2rem"
                    bg="#331D2C"
                    color="white"
                    border="none"
                    boxShadow={"4px 6px 10px black"}
                  />
                </Flex>
                <Flex alignItems="center" gap="0.7rem" mt="2rem">
                  <IoLockClosed size="2rem" color="gray" />
                  <Input
                    type="password"
                    placeholder="Password"
                    borderRadius="2rem"
                    bg="#331D2C"
                    color="white"
                    border="none"
                    boxShadow={"4px 6px 10px black"}
                  />
                </Flex>
                <Flex alignItems="center" gap="0.7rem" mt="2rem">
                  <IoLockOpen size="2rem" color="gray" />
                  <Input
                    type="password"
                    placeholder="Re-write Password"
                    borderRadius="2rem"
                    bg="#331D2C"
                    color="white"
                    border="none"
                    boxShadow={"4px 6px 10px black"}
                  />
                </Flex>
                <Flex alignItems="center" gap="0.7rem" mt="2rem">
                  <IoMail size="2rem" color="gray" />
                  <Input
                    type="Email"
                    placeholder="Email"
                    borderRadius="2rem"
                    bg="#331D2C"
                    color="white"
                    border="none"
                    boxShadow={"4px 6px 10px black"}
                  />
                </Flex>

                <Button
                  type="submit"
                  mt="2rem"
                  minW="15rem"
                  borderRadius="2rem"
                  colorScheme="red"
                  p="1rem"
                  boxShadow={"4px 6px 10px black"}
                >
                  Sign Up
                </Button>
              </Flex>
              <Text mt="0.5rem">
                Oops! You got an account?
                <NavLink to="/login" element={<Login />}>
                  <Text as="b" ml="0.5rem">
                    Log In
                  </Text>
                </NavLink>
              </Text>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

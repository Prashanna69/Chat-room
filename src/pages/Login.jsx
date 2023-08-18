import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import {
  IoPersonCircle,
  IoLockClosed,
  IoFingerPrintSharp,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";

export default function Login() {
  return (
    <>
      <Box
        w="auto"
        minH="100vh"
        bgGradient="linear(to-r, #141e30 20%, #243b55 60%)"
      >
        <Flex
          align="center"
          justify="center"
          minHeight="100vh"
          justifyItems="center"
          flexDir="column"
        >
          <Box p="2rem">
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

              <Button
                mt="2rem"
                minW="15rem"
                borderRadius="2rem"
                colorScheme="red"
                p="1rem"
                boxShadow={"4px 6px 10px black"}
              >
                Log In
              </Button>
              <Text
                as="u"
                color="white"
                mt="0.5rem"
                fontSize="15px"
                fontWeight={600}
              >
                <NavLink to="/reset-password">Forgot Password?</NavLink>
              </Text>
              <Text color="white">
                Don't have account?
                <NavLink to="/SignUp" element={<SignUp />}>
                  <Text as="b" ml="0.5rem" mt="1rem">
                    Sign Up
                  </Text>
                </NavLink>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

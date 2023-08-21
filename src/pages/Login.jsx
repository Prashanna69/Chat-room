import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import {
  IoPersonCircle,
  IoLockClosed,
  IoFingerPrintSharp,
  IoLogoGoogle,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Box w="auto" minH="100vh" bgGradient="linear(to-r, #ffc371 20%,#36d1dc)">
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
                  type="email"
                  placeholder="Email"
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
                boxShadow={"4px 1px 10px black"}
              >
                Log In
              </Button>

              <NavLink>
                <Button
                  borderRadius="2rem"
                  mt="1rem"
                  leftIcon={<IoLogoGoogle />}
                  boxShadow={"4px 1px 10px black"}
                >
                  Sign in with Google
                </Button>
              </NavLink>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

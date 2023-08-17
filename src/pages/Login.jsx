import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { IoPersonCircle, IoLockClosed } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Box
        w="auto"
        minH="100vh"
        bgGradient="linear(to-b, blackAlpha.900 40%, red.500)"
      >
        <Flex
          align="center"
          justify="center"
          minHeight="100vh"
          justifyItems="center"
        >
          <Box p="2rem">
            <Flex alignItems="center" flexDirection="column">
              <Flex alignItems="center" gap="0.5rem">
                <IoPersonCircle size="2.5rem" color="gray" />
                <Input
                  type="text"
                  placeholder="Username"
                  borderRadius="2rem"
                  bg="#331D2C"
                  color="white"
                  border="none"
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
                />
              </Flex>

              <Button
                mt="2rem"
                minW="15rem"
                borderRadius="2rem"
                colorScheme="red"
                p="1rem"
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
                <NavLink>Forgot Password?</NavLink>
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

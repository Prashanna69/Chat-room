// Importing necessary dependencies from Chakra UI, React Icons, Firebase, and React Router
import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import {
  IoPersonCircle,
  IoLockClosed,
  IoFingerPrintSharp,
  IoLogoGoogle,
} from "react-icons/io5";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Defining the Login component
export default function Login() {
  const [value, setValue] = useState(""); // useState is used to get the value from the navigation bar to set up the status.

  const navigate = useNavigate(); // useNavigate is used to navigate from login page to dashboard after the authentication.

  // Handling the Google Sign-In
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data?.user?.email);
      localStorage.setItem("email", data?.user?.email);
      navigate("/dashboard");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email")); // value is kept in local storage for the fast login via Gmail.
  }, []);

  return (
    <>
      {/* Main container */}
      <Box w="auto" minH="100vh" bgGradient="linear(to-r, #ffc371 20%,#36d1dc)">
        {/* Flex container */}
        <Flex
          align="center"
          justify="center"
          minHeight="100vh"
          justifyItems="center"
          flexDir="column"
        >
          {/* Content */}
          <Box p="2rem">
            {/* Inner Flex container */}
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

              <Button
                borderRadius="2rem"
                mt="1rem"
                leftIcon={<IoLogoGoogle />}
                boxShadow={"4px 1px 10px black"}
                onClick={handleSignIn}
              >
                Sign in with Google
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

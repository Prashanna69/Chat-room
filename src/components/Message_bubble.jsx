// Importing necessary dependencies from Chakra UI
import { Box } from "@chakra-ui/react";
import MessageSent from "./MessageSent"; // Importing the MessageSent component
import MessageReceived from "./MessageReceived"; // Importing the MessageReceived component

// Defining the Message_bubble component
export default function Message_bubble() {
  return (
    <>
      {/* Container for displaying message bubbles */}
      <Box maxH="80vh" minH="88vh">
        {/* Displaying received and sent messages */}
        <MessageReceived />
        <MessageSent />
      </Box>
    </>
  );
}

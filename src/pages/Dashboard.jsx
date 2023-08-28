// Importing necessary dependencies from Chakra UI library and local components
import { Box, Grid } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Message from "../components/Message";

// Defining the Dashboard component
export default function Dashboard() {
  return (
    <>
      {/* Creating a container with a background color and padding */}
      <Box bg="#D8D9DA" p="1rem 2rem">
        {/* Using Chakra UI Grid to arrange the sidebar and main content */}
        <Grid templateColumns="1fr 3fr" gap="0.06rem">
          {/* Rendering the Sidebar component */}
          <Sidebar />

          {/* Rendering the Message component */}
          <Message />
        </Grid>
      </Box>
    </>
  );
}

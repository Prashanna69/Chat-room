// Importing necessary dependencies from Chakra UI
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

// Defining the MessageSent component
export default function MessageSent() {
  return (
    <>
      {/* Flex container for right-aligned message */}
      <Flex justifyContent="flex-end" mr="20px ">
        {/* Message card */}
        <Card
          className="sent"
          bg="#0084FF"
          borderRadius="4rem 4rem 0 4rem"
          pr="20px"
          mb="15px"
          fontWeight="600"
          color="white"
          width="fit-content"
          maxW="80%"
          textAlign="right"
          boxShadow="2px 5px 20px black"
        >
          {/* Message content */}
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium sit iure nam? Amet quas, earum obcaecati
              exercitationem neque sapiente aliquam itaque voluptates deleniti
              voluptatem! Perspiciatis est minus placeat ipsum natus ex
            </Text>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
}

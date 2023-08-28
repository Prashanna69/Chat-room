// Importing necessary dependencies from Chakra UI
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

// Defining the MessageReceived component
export default function MessageReceived() {
  return (
    <>
      {/* Message card for received message */}
      <Card
        backgroundColor="#5C5470"
        borderRadius="4rem 4rem 4rem 0"
        margin="20px 15px"
        paddingLeft="20px"
        fontWeight="600"
        color="white"
        width="fit-content"
        maxWidth="80%"
        boxShadow="2px 5px 20px black"
      >
        {/* Message content */}
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium sit iure nam? Amet quas, earum obcaecati exercitationem
            neque sapiente aliquam itaque voluptates deleniti voluptatem!
            Perspiciatis est minus placeat ipsum natus ex provident. Repellendus
            dolorum aut explicabo vero animi corporis deserunt, voluptate
            accusantium dignissimos? Quibusdam aliquam mollitia asperiores magni
            autem sunt culpa dolorum, neque corporis voluptatibus alias!
            Mollitia, sapiente laudantium! Pariatur et quo veritatis quasi
            soluta quam.recusandae veniam explicabo quasi?
          </Text>
        </CardBody>
      </Card>
    </>
  );
}

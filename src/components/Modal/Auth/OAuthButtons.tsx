import { Button, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Button
      _hover={{ opacity: 1 }}
      opacity={0.8}
      width="full"
      variant="oauth"
      mb={2}
    >
      <Image src="/images/googlelogo.png" height="20px" mr={4} />
      Continue with Google
    </Button>
  );
};
export default OAuthButtons;

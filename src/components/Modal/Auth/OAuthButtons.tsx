import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        _hover={{ opacity: 1 }}
        opacity={0.8}
        width="full"
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>

      <Text color="red">{error?.message}</Text>
    </Flex>
  );
};
export default OAuthButtons;

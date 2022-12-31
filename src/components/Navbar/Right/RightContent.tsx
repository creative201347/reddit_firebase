import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import AuthModel from "../../Modal/Auth/AuthModel";
import AuthButtons from "./AuthButtons";

import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/clientApp";

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;

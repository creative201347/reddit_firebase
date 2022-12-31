import { Flex } from "@chakra-ui/react";
import React from "react";

import AuthModel from "../../Modal/Auth/AuthModel";
import AuthButtons from "./AuthButtons";

import { User } from "firebase/auth";

import Icons from "./Icons";
import UserMenu from "./ProfileMenu/MenuWrapper";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;

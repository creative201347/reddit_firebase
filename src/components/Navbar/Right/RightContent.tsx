import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModel from "../../Modal/Auth/AuthModel";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  // user :
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <AuthModel />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;

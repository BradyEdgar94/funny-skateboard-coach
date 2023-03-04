import SideBar from "@/components/molecules/SideBar";
import React from "react";
import { Wrapper, Body, SideBarWrapper } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Layout;

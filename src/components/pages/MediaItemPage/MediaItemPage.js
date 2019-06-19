import React from "react";
import styled from "styled-components";
import TopNav from "../../~reusables/organisms/TopNav";
import SidebarContainer from "../../~reusables/containers/SidebarContainer";
import BottomNav from "../../~reusables/organisms/BottomNav";

const MediaItemPage = ({
  onSearchSubmit,
}) => {
  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer />
        
      </main>
      <BottomNav />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  main {
    display: flex;
  }
`;

export default MediaItemPage;

import React from "react";
import styled from "styled-components";
import TopNav from "../../~reusables/organisms/TopNav";
import SidebarContainer from "../../~reusables/containers/SidebarContainer";
import BottomNav from "../../~reusables/organisms/BottomNav";
import MediaItemContainer from "../../~reusables/containers/MediaItemContainer"

const MediaItemPage = ({
  onSearchSubmit,
  match
}) => {
    console.log(match)
  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer />
        <MediaItemContainer />
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

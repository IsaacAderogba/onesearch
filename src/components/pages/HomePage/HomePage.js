import React from "react";
import styled from "styled-components";
import TopNav from "../../~reusables/organisms/TopNav";
import SidebarContainer from "../../~reusables/containers/SidebarContainer";
import MediaContainer from "../../~reusables/containers/MediaContainer";
import BottomNav from "../../~reusables/organisms/BottomNav";

const HomePage = ({
  onSearchSubmit,
  images,
  videos,
  podcasts,
  windowWidth
}) => {
  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer />
        <MediaContainer
          images={images}
          videos={videos}
          podcasts={podcasts}
          windowWidth={windowWidth}
        />
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

export default HomePage;

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
  windowWidth,
  imageLoader,
  videoLoader,
  podcastLoader,
  fetchMoreImages
}) => {
  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer />
        <MediaContainer
          images={images} imageLoader={imageLoader} fetchMoreImages={fetchMoreImages}
          videos={videos} videoLoader={videoLoader}
          podcasts={podcasts} podcastLoader={podcastLoader}
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

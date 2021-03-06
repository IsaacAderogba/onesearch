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
  fetchMoreImages,
  fetchMoreVideos,
  fetchMorePodcasts,
  searchTerm,
  favItems
}) => {
  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer favItems={favItems} />
        <MediaContainer
          searchTerm={searchTerm}
          images={images}
          imageLoader={imageLoader}
          fetchMoreImages={fetchMoreImages}
          videos={videos}
          videoLoader={videoLoader}
          fetchMoreVideos={fetchMoreVideos}
          podcasts={podcasts}
          podcastLoader={podcastLoader}
          windowWidth={windowWidth}
          fetchMorePodcasts={fetchMorePodcasts}
        />
      </main>
      <BottomNav />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  main {
    display: flex;
    @media only screen and (max-width: 499px) {
      margin-bottom: 60px;
    }
  }
`;

export default HomePage;

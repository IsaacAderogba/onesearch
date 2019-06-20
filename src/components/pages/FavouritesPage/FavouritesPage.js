import React from "react";
import styled from "styled-components";
import TopNav from "../../~reusables/organisms/TopNav";
import SidebarContainer from "../../~reusables/containers/SidebarContainer";
import MediaContainer from "../../~reusables/containers/MediaContainer";
import BottomNav from "../../~reusables/organisms/BottomNav";

const FavouritesPage = ({
  onSearchSubmit,
  windowWidth,
  imageLoader,
  videoLoader,
  podcastLoader,
  searchTerm,
  favItems
}) => {
  console.log(favItems["images"])
  return (
    <StyledFavouritesPage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer favItems={favItems} />
        <MediaContainer
          searchTerm={searchTerm}
          images={favItems["images"]}
          imageLoader={imageLoader}
          videos={favItems["videos"]}
          videoLoader={videoLoader}
          podcasts={favItems["podcasts"]}
          podcastLoader={podcastLoader}
          windowWidth={windowWidth}
        />
      </main>
      <BottomNav />
    </StyledFavouritesPage>
  );
};

const StyledFavouritesPage = styled.div`
  main {
    display: flex;
    @media only screen and (max-width: 499px) {
      margin-bottom: 60px;
    }
  }
`;

export default FavouritesPage;

import React from "react";
import styled from "styled-components";
import TopNav from "../../~reusables/organisms/TopNav";
import SidebarContainer from "../../~reusables/containers/SidebarContainer";
import BottomNav from "../../~reusables/organisms/BottomNav";
import MediaItemContainer from "../../~reusables/containers/MediaItemContainer";

const MediaItemPage = ({ onSearchSubmit, match, videos, podcasts, images }) => {

  let mediaItem;
  switch (match.params.media) {
    case "video":
      mediaItem = videos.find(video => video.id.videoId === match.params.id);
      break;
    case "podcast":
      mediaItem = podcasts.find(podcast => podcast.id === match.params.id);
      break;
    case "image":
      mediaItem = images.find(image => image.id === match.params.id);
      break;
    default:
      mediaItem = "not found";
  }

  return (
    <StyledHomePage>
      <TopNav onSearchSubmit={onSearchSubmit} />
      <main>
        <SidebarContainer />
        <MediaItemContainer mediaItem={mediaItem} type={match.params.media} />
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

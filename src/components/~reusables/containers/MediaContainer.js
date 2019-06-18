import React from "react";
import styled from "styled-components";
import PodcastList from "../organisms/PodcastList";
import VideoList from "../organisms/VideoList";
import ImageList from "../organisms/ImageList";


const MediaContainer = ({images, videos, podcasts, windowWidth}) => {
  return (
    <StyledMediaContainer>
      <PodcastList title="Podcast Results" podcasts={podcasts} windowWidth={windowWidth} />
      <div>
        <VideoList title="Video Results" videos={videos} windowWidth={windowWidth} />
        <ImageList title="Image Results" images={images} />
      </div>
    </StyledMediaContainer>
  );
};

const StyledMediaContainer = styled.div`
  flex-basis: 1265px;
  flex-grow: 1;
  flex-shrink: 1;

  > div {
      display: flex;

      @media only screen and (max-width: 499px) {
        flex-direction: column;
      }
  }
`;

export default MediaContainer;

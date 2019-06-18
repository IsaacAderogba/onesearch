import React from "react";
import styled from "styled-components";
import PodcastList from "../organisms/PodcastList";
import VideoList from "../organisms/VideoList";
import ImageList from "../organisms/ImageList";

const MediaContainer = ({
  images,
  videos,
  podcasts,
  windowWidth,
  imageLoader,
  videoLoader,
  podcastLoader
}) => {
  return (
    <StyledMediaContainer>
      {<PodcastList
        title="Podcasts"
        podcasts={podcasts}
        windowWidth={windowWidth}
        podcastLoader={podcastLoader}
      />}
      <div>
        <VideoList
          title="Videos"
          videos={videos}
          windowWidth={windowWidth}
          videoLoader={videoLoader}
        />
        <ImageList title="Images" images={images} imageLoader={imageLoader} />
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

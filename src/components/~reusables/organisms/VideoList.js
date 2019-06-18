import React from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import { border_color } from "../variables/colors"
import VideoItem from "../molecules/VideoItem"

const VideoList = ({ title, videos, windowWidth }) => {
  let numVideos = 3;
  if(windowWidth < 850) {
    numVideos = 2;
  }
  
  return (
    <StyledVL>
      <h2>{title}</h2>
      {videos.length > 0
          ? videos.slice(0, numVideos).map(video => {
              return (
                <VideoItem
                  key={video.id.videoId}
                  videoTitle={video.snippet.title}
                  videoAuthor={video.snippet.channelTitle}
                  videoDescription={video.snippet.description}
                  imgSrc={video.snippet.thumbnails.medium.url}
                />
              );
            })
          : null}
    </StyledVL>
  );
};

const StyledVL = styled.section`
  flex-basis: 850px;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${normal_space} ${normal_space} 0 ${medium_space};
  border-right: 1px solid ${border_color};


  overflow: hidden;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
  }

  @media only screen and (max-width: 749px) {
    padding: 0 ${normal_space};

  }

  @media only screen and (max-width: 499px) {
    flex-basis: auto;
    border-bottom: 1px solid ${border_color};
  }
`;

export default VideoList;

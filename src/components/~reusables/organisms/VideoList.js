import React from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import { border_color } from "../variables/colors";
import VideoItem from "../molecules/VideoItem";
import ComponentLoader from "../organisms/ComponentLoader";
import { lightgrey, grey, theme_secondary } from "../variables/colors";

const VideoList = ({ title, videos, windowWidth, videoLoader }) => {
  let numVideos = 3;
  if (windowWidth < 850) {
    numVideos = 2;
  }

  return (
    <StyledVL>
      <div>
        <h2>{title}</h2>
        <div className="title-section">
          <i className="material-icons">keyboard_arrow_left</i>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </div>
      {videoLoader ? (
        <ComponentLoader />
      ) : videos.length > 0 ? (
        videos.slice(0, numVideos).map(video => {
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
      ) : null}
    </StyledVL>
  );
};

const StyledVL = styled.section`
  flex-basis: 850px;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${normal_space} ${normal_space} 0 ${medium_space};
  border-right: 1px solid ${border_color};

  div {
    display: flex;
    justify-content: space-between;
  }

  .title-section {
    align-items: center;

    i {
      font-size: 30px;
      cursor: pointer;
      color: ${lightgrey};
    }

    i:last-child {
      margin-left: 8px;
    }

    i:hover {
      color: ${theme_secondary}
    }
  }

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${grey};
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

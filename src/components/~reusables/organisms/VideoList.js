import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import VideoItem from "../molecules/VideoItem";
import ComponentLoader from "../organisms/ComponentLoader";
import { lightgrey, grey, theme_secondary } from "../variables/colors";

const VideoList = ({
  title,
  videos,
  windowWidth,
  videoLoader,
  fetchMoreVideos,
  searchTerm
}) => {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    setVideoIndex(0);
  }, [searchTerm]);

  let numVideos = 3;
  if (windowWidth < 850) {
    numVideos = 2;
  }

  const onClickRightArrow = () => {
    if (fetchMoreVideos) {
      if (videoIndex + numVideos * 2 >= videos.length) {
        setVideoIndex(videoIndex + numVideos);
        fetchMoreVideos();
      } else {
        setVideoIndex(videoIndex + numVideos);
      }
    } else {
      setVideoIndex(videoIndex + numVideos);
    }
  };

  const onClickLeftArrow = () => {
    if (videoIndex - numVideos < 0) {
      console.log("no more items!");
    } else {
      setVideoIndex(videoIndex - numVideos);
    }
  };

  let greyedOut;
  if (videoIndex - numVideos < 0) {
    greyedOut = "greyed-out";
  }

  return (
    <StyledVL>
      <header>
        <h2>{title}</h2>
        <div className="title-section">
          <i onClick={onClickLeftArrow} className={`material-icons ${greyedOut}`}>
            keyboard_arrow_left
          </i>
          <i onClick={onClickRightArrow} className="material-icons">
            keyboard_arrow_right
          </i>
        </div>
      </header>
      {videoLoader ? (
        <ComponentLoader />
      ) : videos.length > 0 ? (
        videos.slice(videoIndex, numVideos + videoIndex).map(video => {
          return (
            <VideoItem
              key={video.id.videoId}
              id={video.id.videoId}
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
  flex-shrink: 5;
  padding: ${normal_space} ${normal_space} 0 ${medium_space};

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-section {
    i {
      font-size: 30px;
      cursor: pointer;
      color: ${lightgrey};
    }

    i:last-child {
      margin-left: 8px;
    }

    i:hover {
      color: ${theme_secondary};
    }

    .greyed-out {
      color: #d4d4d4;

      &:hover {
        color: #d4d4d4;
      }
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
  }
`;

export default VideoList;

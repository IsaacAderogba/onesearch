import React from "react";
import styled from "styled-components";
import { medium_space } from "../variables/spacing";

const MediaItemContainer = ({ mediaItem, type }) => {
  let title, img, author, desc;

  switch (type) {
    case "video":
      title = mediaItem.snippet.title;
      img = mediaItem.snippet.thumbnails.high.url;
      author = mediaItem.snippet.channelTitle;
      desc = mediaItem.snippet.description;
      break;
    case "podcast":
      title = mediaItem.title_original;
      img = mediaItem.thumbnail;
      author = mediaItem.publisher_original;
      desc = mediaItem.description_original
      break;
    case "image":
      title = mediaItem.snippet.name;
      img = mediaItem.urls.regular;
      author = mediaItem.user.name;
      desc = mediaItem.user.bio;
      break;
    default:
  }

  console.log(mediaItem);
  console.log(title, img, author, desc);

  return (
    <StyledMIContainer>
      <h2>dummy</h2>
    </StyledMIContainer>
  );
};

const StyledMIContainer = styled.div`
  border: 1px solid red;
  flex-basis: 1265px;
  padding: 0 ${medium_space};
  flex-grow: 1;
  flex-shrink: 1;
`;

export default MediaItemContainer;

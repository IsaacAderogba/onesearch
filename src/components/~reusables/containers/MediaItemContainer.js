import React from "react";
import styled from "styled-components";
import { medium_space } from "../variables/spacing";
import { grey } from "../variables/colors";

const MediaItemContainer = ({ mediaItem, type }) => {
  let title, img, author, desc, id;

  if (mediaItem) {
    switch (type) {
      case "video":
        title = mediaItem.snippet.title;
        img = mediaItem.snippet.thumbnails.high.url;
        author = mediaItem.snippet.channelTitle;
        desc = "From YouTube";
        id = `https://www.youtube.com/embed/${mediaItem.id.videoId}`;
        break;
      case "podcast":
        title = mediaItem.title_original;
        img = mediaItem.thumbnail;
        author = mediaItem.publisher_original;
        desc = "From ListenNotes";
        id = mediaItem.id;
        break;
      case "image":
        title = mediaItem.user.name;
        img = mediaItem.urls.regular;
        author = `Author Bio: ${mediaItem.user.bio}`;
        desc = "From Unsplash";
        id = mediaItem.id;
        break;
      default:
    }
  }

  console.log(mediaItem, type);
  console.log("title", title, "img", img, "author", author, "desc", desc);

  return (
    <StyledMIContainer>
      <h2>{title}</h2>
      <div className="main-content">
        {type === "video" && <iframe title={title} src={id} />}
        {type === "podcast" && <img src={img} alt={title} />}
        {type === "image" && <img src={img} alt={title} />}
      </div>
    </StyledMIContainer>
  );
};

const StyledMIContainer = styled.div`
  border: 1px solid red;
  flex-basis: 1265px;
  padding: 0 ${medium_space};
  flex-grow: 1;
  flex-shrink: 1;

  .main-content {
    width: 100%;
    min-height: 60vh;
    height: 60vh;
  }

  .main-content iframe {
    width: 100%;
    min-height: inherit;
    height: inherit;
  }

  .main-content img {
      width: 100%;
      min-height: inherit;
      height: inherit;
      object-fit: cover;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${grey};
  }
`;

export default MediaItemContainer;

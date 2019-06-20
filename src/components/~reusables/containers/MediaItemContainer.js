import React from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import { base_font_size, medium_font_size } from "../variables/font-sizes";
import { grey, lightgrey, white, theme_secondary } from "../variables/colors";
import { withRouter } from "react-router-dom";

const MediaItemContainer = ({ mediaItem, type, history }) => {
  let title, img, author, desc, src;

  if (mediaItem) {
    switch (type) {
      case "video":
        title = mediaItem.snippet.title;
        img = mediaItem.snippet.thumbnails.high.url;
        author = mediaItem.snippet.channelTitle;
        desc = `${mediaItem.snippet.description} | from YouTube`;
        src = `https://www.youtube.com/embed/${mediaItem.id.videoId}`;
        break;
      case "podcast":
        title = mediaItem.title_original;
        img = mediaItem.thumbnail;
        author = mediaItem.publisher_original;
        desc = `${mediaItem.description_original} | from ListenNotes`;
        src = mediaItem.audio;
        break;
      case "image":
        title = mediaItem.user.name;
        img = mediaItem.urls.regular;
        author = mediaItem.user.name;
        desc = `Author Bio: ${mediaItem.user.bio} | from Unsplash`;
        src = mediaItem.id;
        break;
      default:
    }
  } else {
    history.push("/");
  }

  console.log(mediaItem, type);
  console.log("title", title, "img", img, "author", author, "desc", desc);

  return (
    <StyledMIContainer>
      <header>
        <h2>{title}</h2>
        <i className="material-icons">favorite_border</i>
      </header>
      <div className="main-content">
        {type === "video" && <iframe title={title} src={src} />}
        {type === "podcast" && <img src={img} alt={title} />}
        {type === "image" && <img src={img} alt={title} />}
      </div>
      {type === "podcast" && (
        <audio controls>
          <source src={src} />
        </audio>
      )}
      {type === "image" && (
        <a href={img} download={img}>
          Download
        </a>
      )}
      <p className="author">{author}</p>
      <p className="desc">{desc}</p>
    </StyledMIContainer>
  );
};

const StyledMIContainer = styled.div`
  flex-basis: 1265px;
  padding: 0 ${medium_space};
  flex-grow: 1;
  flex-shrink: 1;

  .main-content {
    width: 100%;
    min-height: 70vh;
    height: 70vh;
  }

  .main-content iframe {
    width: 100%;
    min-height: inherit;
    height: inherit;
    border: none;
  }

  .main-content img {
    width: 100%;
    min-height: inherit;
    height: inherit;
    object-fit: cover;
  }

  audio {
      margin-top: ${normal_space};
      width: 100%;
      background: ${white};
      outline: none;
  }

  p.author {
    color: ${lightgrey};
    font-size: ${medium_font_size};
  }

  p.desc {
    color: {grey};
    font-size: ${base_font_size};
    line-height: 150%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${grey};
  }

  i {
      font-size: 30px;
      cursor: pointer;
      color: ${lightgrey};
      margin-left: 8px;
    }

  i:hover {
      color: ${theme_secondary};
    }
  }


  @media only screen and (max-width: 499px) {
    padding: 0 ${normal_space};

    .main-content {
        min-height: 35vh;
        height: 35vh;
    }
  }
`;

export default withRouter(MediaItemContainer);

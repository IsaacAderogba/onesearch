import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  h4_font_size,
  h5_font_size,
  small_font_size
} from "../variables/font-sizes";

import { grey, lightgrey } from "../variables/colors";
import { small_space, normal_space } from "../variables/spacing";
import { useSpring, animated } from "react-spring";

const PodcastItem = ({ imgSrc, imgAlt, podcastTitle, podcastAuthor, id }) => {
  const [hovered, setHovered] = useState(false);
  const hoverEffect = useSpring({
    to: {
      transform: `scale(${hovered ? 1.05 : 1})`,
      boxShadow: hovered
        ? "-1px 8px 8px 0px rgba(0, 0, 0, 0.3)"
        : "0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
    }
  });

  return (
    <StyledLink to={`/podcast/${id}`}>
      <animated.article
        style={hoverEffect}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <div className="img-container">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <h4>{podcastTitle.substring(0, 50)}</h4>
        <p>{podcastAuthor}</p>
      </animated.article>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  flex-basis: 148px;
  flex-grow: 1;
  max-width: 500px;
  margin-bottom: ${normal_space};
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  h4 {
    font-size: ${h4_font_size};
    font-weight: 600;
    color: ${grey};
    margin: ${small_space} 0 0 0;
    padding: 0 ${small_space};
  }

  p {
    font-size: ${small_font_size};
    color: ${lightgrey};
    padding: 0 ${small_space};
    padding-bottom: ${small_space}
  }

  article {
    border-radius: 4px;
  }

  .img-container {
    height: auto;

    img {
      height: inherit;
      width: 100%;
    }
  }

  @media only screen and (max-width: 499px) {
    h4 {
      font-size: ${h5_font_size};
    }
    flex-basis: 100px;
  }

  @media only screen and (max-width: 360px) {
    flex-basis: 128px;
  }
`;

export default PodcastItem;

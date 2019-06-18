import React, { useState } from "react";
import styled from "styled-components";
import { h4_font_size, small_font_size } from "../variables/font-sizes";
import { grey, lightgrey } from "../variables/colors";
import { small_space, medium_space } from "../variables/spacing";
import { useSpring, animated } from "react-spring";

const PodcastItem = ({
  imgSrc,
  imgAlt,
  videoTitle,
  videoAuthor,
  videoDescription
}) => {
  const [hovered, setHovered] = useState(false);
  const hoverEffect = useSpring({
    to: {
      transform: `scale(${hovered ? 1.05 : 1})`,
      boxShadow: hovered
        ? "-1px 10px 10px 0px rgba(0, 0, 0, 0.3)"
        : "0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
    }
  });

  return (
    <StyledPI
      style={hoverEffect}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="img-container">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div>
        <h4>{videoTitle}</h4>
        <span>{videoAuthor.substring(0, 20)}</span>
        <p>{videoDescription}</p>
      </div>
    </StyledPI>
  );
};

const StyledPI = styled(animated.article)`
  flex-basis: 100px;
  margin-bottom: ${medium_space};
  cursor: pointer;
  display: flex;
  border-radius: 4px;

  h4 {
    font-size: ${h4_font_size};
    font-weight: 600;
    color: ${grey};
    margin: ${small_space} 0 0 0;
    padding: 0 ${small_space};
  }

  span {
    font-size: ${small_font_size};
    color: ${lightgrey};
    padding: 0 0 0 ${small_space};
  }

  p {
    font-size: ${small_font_size};
    color: ${grey};
    margin: 4px 0 0 0;
    padding: 0 ${small_space} 0 ${small_space};
  }

  .img-container {
    width: 200px;
    height: 120px;

    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 849px) {
    flex-direction: column;

    .img-container {
      width: 100%;

      img {
        width: inherit;
      }
    }
  }
`;

export default PodcastItem;

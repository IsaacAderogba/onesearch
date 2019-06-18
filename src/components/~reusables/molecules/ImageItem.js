import React, { useState } from "react";
import styled from "styled-components";
import { h4_font_size } from "../variables/font-sizes";
import { lightgrey } from "../variables/colors";
import { small_space, medium_space } from "../variables/spacing";
import { useSpring, animated } from "react-spring";

const ImageItem = ({ imgSrc, imgAlt, imageAuthor }) => {
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
        <h4>{imageAuthor} | Unsplash</h4>
      </div>
    </StyledPI>
  );
};

const StyledPI = styled(animated.article)`
  flex-basis: 100px;
  margin-bottom: ${medium_space};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  h4 {
    font-size: ${h4_font_size};
    font-weight: 400;
    color: ${lightgrey};
    margin: ${small_space} 0 0 0;
    padding: 0 ${small_space} ${small_space} ${small_space};
  }

  .img-container {
    width: 100%;
    height: 130px;

    img {
      width: inherit;
      height: inherit;
      object-fit: cover;
    }

    @media only screen and (max-width: 499px) {
      height: 160px;
    }
  }
`;

export default ImageItem;

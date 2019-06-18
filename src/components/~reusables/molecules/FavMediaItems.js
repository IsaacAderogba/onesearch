import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { h4_font_size, small_font_size } from "../variables/font-sizes";
import { normal_space, small_space } from "../variables/spacing";
import { lightgrey} from "../variables/colors"


const FavMediaItems = ({ title }) => {
  return (
    <StyledFMI>
      <Link to="/">{title}</Link>
      <ul>
        <li>Media Item Title 1</li>
        <li>Media Item Title 2</li>
        <li>Media Item Title 3</li>
        <li>Media Item Title 4</li>
      </ul>
    </StyledFMI>
  );
};

const StyledFMI = styled.div`
  flex-basis: 220px;
  flex-grow: 0;
  
  ul {
    list-style-type: none;
    padding: 0 ${normal_space};
    margin: ${small_space} 0 0;
  }

  ul li {
    font-size: ${small_font_size};
    margin-top: ${small_space};

  }

  a {
    font-size: ${h4_font_size};
    margin-top: ${normal_space};
    padding-left: ${small_space};
    display: block;
    text-decoration: none;
    color: ${lightgrey}
  }
`;

export default FavMediaItems;

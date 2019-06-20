import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { h4_font_size, small_font_size } from "../variables/font-sizes";
import { normal_space, small_space } from "../variables/spacing";
import { lightgrey } from "../variables/colors";

const FavMediaItems = ({ title, favItems, type }) => {
  console.log(favItems);

  // let itemsTitle;
  // let itemsId;
  // if (type) {
  //   switch (type) {
  //     case "videos":
  //       itemsTitle = "snippet.title";
  //       itemsId = "id.videoId"
  //       break;
  //     case "podcasts":
  //       itemsTitle = "title_original";
  //       itemsId = "id"
  //       break;
  //     case "images":
  //       itemsTitle = "user.name";
  //       itemsId = "id"
  //       break;
  //     default:
  //   }
  // }

  return (
    <StyledFMI>
      <Link to="/">{title}</Link>
      <ul>
        {type === 'videos' ? favItems.slice(0, 4).map(item => {
          return <li key={item.id.videoId}>{item.snippet.title}</li>;
        }) : null }
        {type === 'podcasts' ? favItems.slice(0, 4).map(item => {
          return <li key={item.id}>{item.title_original}</li>;
        }) : null }
        {type === 'images' ? favItems.slice(0, 4).map(item => {
          return <li key={item.id}>{item.user.name}</li>;
        }) : null }
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
    color: ${lightgrey};
  }
`;

export default FavMediaItems;

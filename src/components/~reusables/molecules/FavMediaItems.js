import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { h4_font_size, small_font_size } from "../variables/font-sizes";
import { normal_space, small_space } from "../variables/spacing";
import { lightgrey, grey } from "../variables/colors";

const FavMediaItems = ({ title, favItems, type }) => {
  return (
    <StyledFMI>
      <Link to="/favourites">{title}</Link>
      <ul>
        {type === "videos"
          ? favItems.slice(0, 3).map(item => {
              return (
                <li key={item.id.videoId}>
                  <Link to={`/video/${item.id.videoId}`}>
                    {item.snippet.title}
                  </Link>
                </li>
              );
            })
          : null}
        {type === "podcasts"
          ? favItems.slice(0, 4).map(item => {
              return (
                <li key={item.id}>
                  <Link to={`/podcast/${item.id}`}>{item.title_original}</Link>
                </li>
              );
            })
          : null}
        {type === "images"
          ? favItems.slice(0, 4).map(item => {
              return (
                <li key={item.id}>
                  <Link to={`/image/${item.id}`}>{item.user.name} {item.alt_description}</Link>
                </li>
              );
            })
          : null}
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
    text-decoration: none;
    color: ${grey}
    text-transform: capitalize;
  }

  > a {
    font-size: ${h4_font_size};
    margin-top: ${normal_space};
    padding-left: ${small_space};
    display: block;
    color: ${lightgrey};
  }
`;

export default FavMediaItems;

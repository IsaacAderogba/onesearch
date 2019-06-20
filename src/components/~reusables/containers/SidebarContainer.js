import React from "react";
import styled from "styled-components";

import { h1_font_size } from "../variables/font-sizes";
import { theme_light, border_color } from "../variables/colors";
import FavMediaItems from "../molecules/FavMediaItems";

const SidebarContainer = ({ favItems }) => {
  return (
    <StyledSidebar>
      <FavMediaItems title="Favourite Podcasts" favItems={favItems.podcasts} type={Object.keys(favItems)[2]} />
      <FavMediaItems title="Favourite Videos" favItems={favItems.videos} type={Object.keys(favItems)[1]} />
      <FavMediaItems title="Favourite Images" favItems={favItems.images} type={Object.keys(favItems)[0]} />
      <div className="empty-div" />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  min-height: 90vh;
  min-width: 150px;
  flex-basis: 150px;

  display: flex;
  flex-direction: column;
  background-color: ${theme_light};
  border-right: 1px solid ${border_color};

  .empty-div {
    flex-grow: 1;
  }

  h1 {
    font-size: ${h1_font_size};
  }

  @media only screen and (max-width: 749px) {
    display: none;
  }
`;

export default SidebarContainer;

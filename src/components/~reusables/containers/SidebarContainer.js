import React from "react";
import styled from "styled-components";

import { h1_font_size } from "../variables/font-sizes";
import { theme_light, border_color } from "../variables/colors";
import FavMediaItems from "../molecules/FavMediaItems";

const SidebarContainer = () => {
  return (
    <StyledSidebar>
      <FavMediaItems title="Favourite Podcasts" />
      <FavMediaItems title="Favourite Videos" />
      <FavMediaItems title="Favourite Images" />
      <div className='empty-div'></div>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  min-height: 90vh;
  min-width: 150px;
  flex-basis: 150px;

  display: flex;
  flex-direction: column;
  background-color: ${theme_light} ;
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

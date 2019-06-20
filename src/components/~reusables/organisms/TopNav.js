import React from "react";
import styled from "styled-components";

import Logo from "../molecules/Logo";
import NaviLink from "../molecules/NaviLink";
import SearchBar from "../molecules/SearchBar";
import { border_color, theme_primary } from "../variables/colors";

const TopNav = ({ onSearchSubmit }) => {
  return (
    <StyledDH>
      <Logo link="/" />
      <SearchBar onSearchSubmit={onSearchSubmit} placeholder="Search..." />
      <NaviLink link="/favourites" activeColor={theme_primary} text="favorite_border" />
      <NaviLink link="" activeColor={theme_primary} text="exit_to_app" />
      <NaviLink link="/" activeColor={theme_primary} text="home" />
    </StyledDH>
  );
};

const StyledDH = styled.nav`
  height: 10vh;
  display: flex;
  border-bottom: 1px solid ${border_color};

  @media only screen and (max-width: 499px) {
    height: 60px;

    .navlink {
      display: none;
    }
  }
`;

export default TopNav;

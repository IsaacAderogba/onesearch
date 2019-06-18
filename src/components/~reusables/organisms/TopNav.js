import React from "react";
import styled from "styled-components";

import Logo from "../molecules/Logo";
import NaviLink from "../molecules/NaviLink";
import SearchBar from "../molecules/SearchBar";
import { border_color, theme_primary } from "../variables/colors";
import favIcon from "../../images/fav-icon.png";
import logoutIcon from "../../images/logout-icon.png";

const TopNav = ({ onSearchSubmit }) => {
  return (
    <StyledDH>
      <Logo link="/" />
      <SearchBar onSearchSubmit={onSearchSubmit} placeholder="Search..." />
      <NaviLink link="/" imgSrc={favIcon} />
      <NaviLink link="/" imgSrc={logoutIcon} />
      <NaviLink link="/" backgroundColor={theme_primary} text="MB" />
    </StyledDH>
  );
};

const StyledDH = styled.nav`
  height: 10vh;
  display: flex;
  border-bottom: 1px solid ${border_color};

  @media only screen and (max-width: 499px) {
    height: 48px;

    .navlink {
      display: none;
    }
  }
`;

export default TopNav;

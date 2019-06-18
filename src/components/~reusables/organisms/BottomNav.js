import React from "react";
import styled from "styled-components";

import NaviLink from "../molecules/NaviLink";
import { border_color, theme_primary } from "../variables/colors";

const TopNav = () => {
  return (
    <StyledDH>
      <NaviLink link="/" activeColor={theme_primary} text="home" />
      <NaviLink link="" activeColor={theme_primary} text="favorite_border" />
      <NaviLink link="" activeColor={theme_primary} text="exit_to_app" />
    </StyledDH>
  );
};

const StyledDH = styled.nav`
  display: none;

  @media only screen and (max-width: 499px) {
    max-width: 1440px;
    width: 100%;
    background-color: white;
    height: 48px;
    margin: 0 auto;
    display: flex;
    border-top: 1px solid ${border_color};

    bottom: 0;
    position: fixed;
  }
`;

export default TopNav;

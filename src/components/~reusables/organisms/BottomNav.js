import React from "react";
import styled from "styled-components";

import NaviLink from "../molecules/NaviLink";
import { border_color, theme_primary } from "../variables/colors";
import favIcon from "../../images/fav-icon.png";
import logoutIcon from "../../images/logout-icon.png";

const TopNav = () => {
  return (
    <StyledDH>
      <NaviLink link="/" backgroundColor={theme_primary} text="MB" />
      <NaviLink link="/" imgSrc={favIcon} />
      <NaviLink link="/" imgSrc={logoutIcon} />
    </StyledDH>
  );
};

const StyledDH = styled.nav`
  display: none;

  @media only screen and (max-width: 499px) {
    max-width: 1440px;
    width: 100%;
    background-color: white;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    border: 1px solid red;
    border-top: 1px solid ${border_color};

    bottom: 0;
    position: fixed;
  }
`;

export default TopNav;

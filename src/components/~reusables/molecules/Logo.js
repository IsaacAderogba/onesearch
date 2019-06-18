import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme_light, border_color, white } from "../variables/colors";
import logoIcon from "../../images/logo-icon.png";
import logoText from "../../images/logo-text.png";

const Logo = ({ link }) => {
  return (
    <StyledLogo>
      <Link to={link}>
        <div className="logo-icon">
          <img src={logoIcon} alt="Logo Icon" />
        </div>
        <div className="logo-text">
          <img src={logoText} alt="Logo Text" />
        </div>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  height: inherit;
  flex-basis: 150px;
  min-width: 150px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${theme_light};
  border-right: 1px solid ${border_color};

  a {
    display: flex;
    align-items: center;
  }

  .logo-icon {
    width: 40px;
    img {
      width: inherit;
    }
  }

  .logo-text {
    width: 90px;

    img {
      width: inherit;
    }

    @media only screen and (max-width: 749px) {
      display: none;
    }
  }

  @media only screen and (max-width: 749px) {
    display: flex;
    min-width: 100px;
    flex-basis: 100px;
    background-color: ${white};
  }
`;

export default Logo;

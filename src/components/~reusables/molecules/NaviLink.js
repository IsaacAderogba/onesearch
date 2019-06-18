import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { white, border_color } from "../variables/colors";

const NaviLink = ({ link, imgSrc, imgAlt, backgroundColor, text }) => {
  return (
    <StyledLink className="navlink" backgroundColor={backgroundColor}>
      <NavLink to={link}>
        <div>
          {text ? <h5>{text}</h5> : null}
          {imgSrc ? <img src={imgSrc} alt={imgAlt} /> : null}
        </div>
      </NavLink>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  height: inherit;
  flex-basis: 120px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${border_color};

  a {
    text-decoration: none;
  }

  div {
    background-color: ${props =>
      props.backgroundColor ? props.backgroundColor : white};
    height: 30px;
    border-radius: 50%;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      color: ${white};
    }

    img {
      text-align: center;
      width: 100%;
    }
  }
`;

export default NaviLink;

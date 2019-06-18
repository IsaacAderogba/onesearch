import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { border_color, lightgrey } from "../variables/colors";

const NaviLink = ({ link, activeColor, text }) => {
  return (
    <StyledLink className="navlink" activeColor={activeColor}>
      <NavLink to={link} activeClassName="active">
        <div>{text ? <i className="material-icons">{text}</i> : null}</div>
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

  .active i {
    color: ${props => (props.activeColor ? props.activeColor : null)};
  }

  a {
    text-decoration: none;
  }

  div {
    height: 30px;
    border-radius: 50%;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    i {
      color: ${lightgrey};
      font-size: 30px;
    }
  }
`;

export default NaviLink;

import React from "react";
import styled from "styled-components";
import { white, lightgrey } from "../variables/colors";

const ComponentLoader = () => (
  <StyledLoader>
    <div className="lds-dual-ring" />
  </StyledLoader>
);

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${lightgrey};
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  height: 100%;
  width: 100%;
  background-color: ${white};
`;

export default ComponentLoader;

import React from "react";
import styled from "styled-components";
import { medium_space } from "../variables/spacing";


const MediaItemContainer = ({title}) => {
  return (
    <StyledMIContainer>
        <h2>{title}</h2>
    </StyledMIContainer>
  );
};

const StyledMIContainer = styled.div`
  border: 1px solid red;
  flex-basis: 1265px;
  padding: 0 ${medium_space};
  flex-grow: 1;
  flex-shrink: 1;
`;

export default MediaItemContainer;

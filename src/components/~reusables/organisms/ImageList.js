import React from "react";
import styled from "styled-components";
import { medium_space, normal_space } from "../variables/spacing";
import ImageItem from "../molecules/ImageItem";
import ComponentLoader from "../organisms/ComponentLoader";

const ImageList = ({ title, images, imageLoader }) => {
  return (
    <StyledIL>
      <div>
        <h2>{title}</h2>
      </div>
      {imageLoader ? (
        <ComponentLoader />
      ) : (
        <div>
          {images.length > 0
            ? images.slice(0, 2).map(image => {
                return (
                  <ImageItem
                    key={image.id}
                    imgSrc={image.urls.small}
                    imageAuthor={image.user.name}
                  />
                );
              })
            : null}
        </div>
      )}
    </StyledIL>
  );
};

const StyledIL = styled.section`
  flex-basis: 415px;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${normal_space} ${medium_space} 0 ${normal_space};
  overflow: hidden;

  h2 {
    font-size: 20px;
  }

  @media only screen and (max-width: 749px) {
    padding: 0 ${normal_space};
  }

  @media only screen and (max-width: 499px) {
    flex-basis: auto;
  }
`;

export default ImageList;

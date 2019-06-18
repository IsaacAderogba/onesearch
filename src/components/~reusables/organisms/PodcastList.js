import React from "react";
import styled from "styled-components";
import PodcastItem from "../molecules/PodcastItem.js";
import { medium_space, normal_space } from "../variables/spacing";
import { border_color } from "../variables/colors";
import ComponentLoader from "../organisms/ComponentLoader";
import { grey, theme_secondary } from "../variables/colors";

const PodcastList = ({ title, podcasts, windowWidth, podcastLoader }) => {
  let numPodcasts;

  if (windowWidth > 1250) {
    numPodcasts = 6;
  } else if (windowWidth > 1000) {
    numPodcasts = 5;
  } else if (windowWidth > 850) {
    numPodcasts = 4;
  } else if (windowWidth > 370) {
    numPodcasts = 3;
  } else if (windowWidth > 0) {
    numPodcasts = 2;
  }

  return (
    <StyledPL>
      <div>
        <h2>{title}</h2>
        <div className="title-section">
          <i className="material-icons">keyboard_arrow_left</i>
          <i className="material-icons">keyboard_arrow_right</i>
        </div>
      </div>

      {podcastLoader ? (
        <ComponentLoader />
      ) : (
        <div>
          {podcasts.length > 0
            ? podcasts.slice(0, numPodcasts).map(podcast => {
                return (
                  <PodcastItem
                    key={podcast.id}
                    podcastTitle={podcast.title_original}
                    podcastAuthor={podcast.publisher_original}
                    imgSrc={podcast.thumbnail}
                  />
                );
              })
            : null}
        </div>
      )}
    </StyledPL>
  );
};

const StyledPL = styled.section`
  padding: 0 ${medium_space};
  border-bottom: 1px solid ${border_color};
  overflow: hidden;

  div {
    display: flex;
    justify-content: space-between;
  }

  .title-section {
    align-items: center;

    i {
      font-size: 30px;
      cursor: pointer;
      color: ${grey}
    }

    i:last-child {
      margin-left: 8px;
    }

    i:hover {
      color: ${theme_secondary}
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${grey};
  }

  @media only screen and (max-width: 749px) {
    padding: 0 ${normal_space};
  }
`;

export default PodcastList;

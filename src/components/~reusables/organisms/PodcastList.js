import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PodcastItem from "../molecules/PodcastItem.js";
import { medium_space, normal_space } from "../variables/spacing";
import ComponentLoader from "../organisms/ComponentLoader";
import { lightgrey, grey, theme_secondary } from "../variables/colors";

const PodcastList = ({
  title,
  podcasts,
  windowWidth,
  podcastLoader,
  fetchMorePodcasts,
  searchTerm
}) => {
  const [podcastIndex, setPodcastIndex] = useState(0);

  useEffect(() => {
    setPodcastIndex(0);
  }, [searchTerm]);

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

  const onClickRightArrow = () => {
    if (fetchMorePodcasts) {
      if (podcastIndex + numPodcasts * 2 >= podcasts.length) {
        setPodcastIndex(podcastIndex + numPodcasts);
        fetchMorePodcasts();
      } else {
        setPodcastIndex(podcastIndex + numPodcasts);
      }
    } else {
      setPodcastIndex(podcastIndex + numPodcasts);
    }
  };

  const onClickLeftArrow = () => {
    if (podcastIndex - numPodcasts < 0) {
    } else {
      setPodcastIndex(podcastIndex - numPodcasts);
    }
  };

  let greyedOut;
  if (podcastIndex - numPodcasts < 0) {
    greyedOut = "greyed-out";
  }

  return (
    <StyledPL>
      <div>
        <h2>{title}</h2>
        <div className="title-section">
          <i
            onClick={onClickLeftArrow}
            className={`material-icons ${greyedOut}`}
          >
            keyboard_arrow_left
          </i>
          <i onClick={onClickRightArrow} className="material-icons">
            keyboard_arrow_right
          </i>
        </div>
      </div>

      {podcastLoader ? (
        <ComponentLoader />
      ) : (
        <div>
          {podcasts.length > 0
            ? podcasts
                .slice(podcastIndex, numPodcasts + podcastIndex)
                .map(podcast => {
                  return (
                    <PodcastItem
                      key={podcast.id}
                      id={podcast.id}
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
  overflow: hidden;

  div {
    display: flex;
    justify-content: space-between;

    a {
      margin-right: ${normal_space};
    }
    a:last-of-type {
      margin-right: 0;
    }
  }

  .title-section {
    align-items: center;

    i {
      font-size: 30px;
      cursor: pointer;
      color: ${lightgrey};
    }

    i:last-child {
      margin-left: 8px;
    }

    i:hover {
      color: ${theme_secondary};
    }

    .greyed-out {
      color: #d4d4d4;

      &:hover {
        color: #d4d4d4;
      }
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

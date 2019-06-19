import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import MediaItemPage from "./components/pages/MediaItemPage/MediaItemPage";
import "./App.css";
import youtube from "./apis/youtube";
import unsplash from "./apis/unsplash";
import listen from "./apis/listenNotes";

function App() {
  const [images, setImages] = useState([]);
  const [imageLoader, setImageLoader] = useState(true);
  const [imgPage, setImgPage] = useState(1);

  const [videos, setVideos] = useState([]);
  const [videoLoader, setVideoLoader] = useState(true);
  const [videoPgToken, setVideoPgToken] = useState(null);

  const [podcasts, setPodcasts] = useState([]);
  const [podcastLoader, setPodcastLoader] = useState(true);
  const [podPgToken, setPodPgToken] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  const onSearchSubmit = term => {
    setSearchTerm(term);
    // fetchImages(term);
    // fetchVideos(term);
    fetchPodcasts(term);
  };

  const fetchImages = term => {
    setImgPage(1);
    setImageLoader(true);
    unsplash
      .get("/photos", {
        params: { query: term, per_page: 30 }
      })
      .then(response => {
        setImages(response.data.results);
      })
      .finally(() => {
        setImageLoader(false);
      });
  };

  const fetchMoreImages = () => {
    setImageLoader(true);
    let imgPgIndex = imgPage + 1;
    setImgPage(imgPage + 1);
    unsplash
      .get("/photos", {
        params: { query: searchTerm, per_page: 30, page: imgPgIndex }
      })
      .then(response => {
        setImages([...images, ...response.data.results]);
      })
      .finally(() => {
        setImageLoader(false);
      });
  };

  const fetchVideos = term => {
    setVideoLoader(true);
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        console.log(response);
        setVideoPgToken(response.data.nextPageToken);
        setVideos(response.data.items);
      })
      .finally(() => {
        setVideoLoader(false);
      });
  };

  const fetchMoreVideos = () => {
    setVideoLoader(true);
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
          pageToken: videoPgToken
        }
      })
      .then(response => {
        setVideoPgToken(response.data.nextPageToken);
        setVideos([...videos, ...response.data.items]);
      })
      .finally(() => {
        setVideoLoader(false);
      });
  };

  const fetchPodcasts = term => {
    setPodcastLoader(true);
    listen
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        setPodPgToken(response.data.next_offset);
        setPodcasts(response.data.results);
      })
      .finally(() => {
        setPodcastLoader(false);
      });
  };

  const fetchMorePodcasts = () => {
    setPodcastLoader(true);
    listen
      .get("/search", {
        params: {
          q: searchTerm,
          offset: podPgToken
        }
      })
      .then(response => {
        setPodPgToken(response.data.next_offset);
        setPodcasts([...podcasts, ...response.data.results]);
      })
      .finally(() => {
        setPodcastLoader(false);
      });
  };

  return (
    <>
      <Route
        exact
        path="/"
        render={routeProps => (
          <HomePage
            {...routeProps}
            searchTerm={searchTerm}
            onSearchSubmit={onSearchSubmit}
            images={images}
            imageLoader={imageLoader}
            fetchMoreImages={fetchMoreImages}
            videos={videos}
            videoLoader={videoLoader}
            podcasts={podcasts}
            podcastLoader={podcastLoader}
            windowWidth={windowWidth}
            fetchMoreVideos={fetchMoreVideos}
            fetchMorePodcasts={fetchMorePodcasts}
          />
        )}
      />
      <Route
        path="/:media/:id"
        render={routeProps => (
          <MediaItemPage
            {...routeProps}
            onSearchSubmit={onSearchSubmit}
            videos={videos}
            podcasts={podcasts}
            images={images}
          />
        )}
      />
    </>
  );
}

export default App;

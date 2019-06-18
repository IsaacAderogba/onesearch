import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import "./App.css";
import youtube from "./apis/youtube";
import unsplash from "./apis/unsplash";
import listen from "./apis/listenNotes";

function App() {
  const [images, setImages] = useState([]);
  const [imageLoader, setImageLoader] = useState(true);
  const [videos, setVideos] = useState([]);
  const [videoLoader, setVideoLoader] = useState(true);
  const [podcasts, setPodcasts] = useState([]);
  const [podcastLoader, setPodcastLoader] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  const onSearchSubmit = term => {
    fetchImages(term);
    fetchVideos(term);
    fetchPodcasts(term);
  };

  const fetchImages = term => {
    setImageLoader(true);
    unsplash
      .get("/photos", {
        params: { query: term }
      })
      .then(response => {
        console.log("IMAGES", response.data.results)
        setImages(response.data.results);
      })
      .catch(err => {
        console.log(err);
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
        console.log("VIDEOS", response.data.items)
        setVideos(response.data.items);
      })
      .catch(err => {
        console.log(err);
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
        console.log("PODCASTS", response.data.results)
        setPodcasts(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setPodcastLoader(false);
      });
  };

  return (
    <Route
      exact
      path="/"
      render={routeProps => (
        <HomePage
          {...routeProps}
          onSearchSubmit={onSearchSubmit}
          images={images}
          imageLoader={imageLoader}
          videos={videos}
          videoLoader={videoLoader}
          podcasts={podcasts}
          podcastLoader={podcastLoader}
          windowWidth={windowWidth}
        />
      )}
    />
  );
}

export default App;

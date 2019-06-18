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
  const [podcasts, setPodcasts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  });

  const onSearchSubmit = term => {
    // unsplash
    //   .get("/photos", {
    //     params: { query: term }
    //   })
    //   .then(response => {
    //     setImages(response.data.results);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     // to do
    //   });

    // youtube
    //   .get("/search", {
    //     params: {
    //       q: term
    //     }
    //   })
    //   .then(response => {
    //     setVideos(response.data.items);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     // to do
    //   });

    // listen
    //   .get("/search", {
    //     params: {
    //       q: term
    //     }
    //   })
    //   .then(response => {
    //     setPodcasts(response.data.results);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     // to do
    //   });
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
          videos={videos}
          podcasts={podcasts}
          windowWidth={windowWidth}
        />
      )}
    />
  );
}

export default App;

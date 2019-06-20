import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import MediaItemPage from "./components/pages/MediaItemPage/MediaItemPage";
import FavouritesPage from "./components/pages/FavouritesPage/FavouritesPage";
import state from "./components/state/state";
import "./App.css";
import youtube from "./apis/youtube";
import unsplash from "./apis/unsplash";
import listen from "./apis/listenNotes";

function App() {
  const [images, setImages] = useState(state.length > 0 ? state[0] : []);
  const [imageLoader, setImageLoader] = useState(true);
  const [imgPage, setImgPage] = useState(1);

  const [videos, setVideos] = useState(state.length > 0 ? state[1] : []);
  const [videoLoader, setVideoLoader] = useState(true);
  const [videoPgToken, setVideoPgToken] = useState(null);

  const [podcasts, setPodcasts] = useState(state.length > 0 ? state[2] : []);
  const [podcastLoader, setPodcastLoader] = useState(true);
  const [podPgToken, setPodPgToken] = useState(null);

  const [favItems, setFavItems] = useState(
    state.length > 0
      ? state[3]
      : {
          images: [],
          videos: [],
          podcasts: []
        }
  );

  const [searchTerm, setSearchTerm] = useState(
    state.length > 0 ? state[4] : ""
  );
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if(images.length <= 0) {
      setTimeout(() => {
        fetchImages('news')
        fetchVideos('news')
        fetchPodcasts('news')
      }, 2000)
    }
  }, [images.length])

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    localStorage.clear();
    localStorage.setItem(0, JSON.stringify(images));
    localStorage.setItem(1, JSON.stringify(videos));
    localStorage.setItem(2, JSON.stringify(podcasts));
    localStorage.setItem(3, JSON.stringify(favItems));
    localStorage.setItem(4, JSON.stringify(searchTerm));
  }, [favItems, images, podcasts, searchTerm, videos]);

  const onRemoveFavourite = (id, type) => {
    let editedFavItem;
    if (type in favItems) {
      editedFavItem = favItems[type].filter(item => {
        if (item.id.videoId) {
          return item.id.videoId !== id;
        }
        return item.id !== id;
      });
    }

    let newFavItems = { ...favItems, [type]: editedFavItem };
    setFavItems(newFavItems);
  };

  const onAddToFavourite = (item, type) => {
    let editedFavItem;
    if (type in favItems) {
      editedFavItem = [...favItems[type], item];
    }
    let newFavItems = { ...favItems, [type]: editedFavItem };
    setFavItems(newFavItems);
  };

  const onSearchSubmit = term => {
    setSearchTerm(term);
    setVideos([1])
    fetchImages(term);
    fetchVideos(term);
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
            favItems={favItems}
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
            favItems={favItems}
            onAddToFavourite={onAddToFavourite}
            onRemoveFavourite={onRemoveFavourite}
          />
        )}
      />
      <Route
        exact
        path="/favourites"
        render={routeProps => (
          <FavouritesPage
            {...routeProps}
            searchTerm={searchTerm}
            onSearchSubmit={onSearchSubmit}
            imageLoader={imageLoader}
            videoLoader={videoLoader}
            podcastLoader={podcastLoader}
            windowWidth={windowWidth}
            favItems={favItems}
          />
        )}
      />
    </>
  );
}

export default App;

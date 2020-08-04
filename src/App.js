import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import AllPodcastsPage from "./AllPodcastsPage/AllPodcastsPage"
import PodcastDetails from './PodcastDetails/PodcastDetails'
import { getSearchedPodcasts } from './ApiCalls'
import "./App.css";

const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  const [favoritePodcasts, setFavoritePodcasts] = useState([]);
  const [isFavorite, setIsFavorite] = useState('');

  const toggleFavoritePodcast = (id) => {
   return favoritePodcasts.some(podcast => podcast.podcast.id === id ? true : false)
  }

  // Search 
  const findResults = async (searchValue) => {
    try {
      const byPodcast = await getSearchedPodcasts(searchValue);
      setSearchedResults(byPodcast);
    }

    catch(error) {
      console.log(error)
    } 
  };

  const reset = () => {
    setSearchedResults([])
  }

    return (
      <main>
        <Header findResults={findResults} reset={reset}/>
        <Switch>
        <Route 
          path="/podcast/:id"
          render={({ match }) => {
            const { id } = match.params;
            return(
              <PodcastDetails 
                id={id}
                favoritePodcasts={favoritePodcasts}
                setFavoritePodcasts={setFavoritePodcasts}
                toggleFavoritePodcast={toggleFavoritePodcast}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
              />
            )
          }}
        />
        <Route
          path="/favoritePodcasts"
          render={() => (
            <AllPodcastsPage 
            searchedResults={favoritePodcasts} />
            )}
            />
          <Route
            path="/" 
            render= {() => (
              <AllPodcastsPage
                searchedResults={searchedResults}
                // error={allPError}
              />
            )}
          />
        </Switch>

      </main>
    );
};

export default App;

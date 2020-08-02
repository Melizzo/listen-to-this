import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import AllPodcastsPage from "./AllPodcastsPage/AllPodcastsPage"
import PodcastDetails from './PodcastDetails/PodcastDetails'
import { getSearchedPodcasts } from './ApiCalls'
import "./App.css";

const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  const [RandomPodcast, setRandomPodcast] = useState({});
  const [favoritePodcasts, setFavoritePodcasts] = useState([]);

  // Functions

  // const addPodcastToFavorites = (podcastObj) => {
  //   setFavoritePodcasts(podcastObj)
  // }

  const toggleFavoritePodcast = (id) => {
   return favoritePodcasts.find(podcast => podcast.id === id ? true : false)
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

    return (
      <main>
        <Header findResults={findResults} />
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
            {console.log(favoritePodcasts)}

        <Route
          path="/random_podcast"
          render={() => (
						<RandomPodcast 
							// randomPodcast={randomPodcast} 
							// error={randomCError}
						/>
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

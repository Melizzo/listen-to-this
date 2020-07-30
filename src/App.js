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



  // Functions

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
              />
            )
          }}
        />
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

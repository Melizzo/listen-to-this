import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import AllPodcastsPage from "./AllPodcastsPage/AllPodcastsPage"
import { getSearchedPodcasts } from './ApiCalls'
import "./App.css";

const App = () => {
  const [searchedResults, setSearchedResults] = useState([]);
  const [RandomPodcast, setRandomPodcast] = useState({});



  // Functions

  // Search 
  const findResults = (searchValue) => {
    try {
      const byPodcast = getSearchedPodcasts(searchValue);
      console.log(byPodcast);
    }
    catch(error) {
      console.log(error)
    }
    
    // setSearchedResults([...byPodcast]);
  };

    return (
      <main>
        <Header findResults={findResults} />

        <Switch>
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

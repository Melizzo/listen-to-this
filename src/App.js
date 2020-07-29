import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import AllPodcastsPage from "./AllPodcastsPage/AllPodcastsPage"
import "./App.css";

const App = () => {
  const [searchedResults, setSearchedResults] = useState('');
  const [RandomPodcast, setRandomPodcast] = useState({});



  // Functions

  // Search 
  const findResults = () => {
    // Display searched podcasts into podcast container
    // const byPodcastName = searchPodcasts(searchValue);
    // setSearchedResults([...byPodcastName]);
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

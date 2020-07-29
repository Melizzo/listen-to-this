import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import RandomPodcastPage from "./RandomPodcastPage/RandomPodcastPage"
import AllPodcastsPage from "./AllPodcastsPage/AllPodcastsPage"
import RandomPodcast from "./RandomPodcast/RandomPodcast"
import "./App.css";

const App = () => {
  const [FilteredResults, setFilteredResults] = useState;
  const [RandomPodcast, setRandomPodcast] = useState;

  // Functions

  // Search 
  const findResults = () => {
    // Display searched podcasts into podcast container
    // const byPodcastName = searchByName(searchValue);
    // setFilteredResults([...byPodcastName]);
  };

  const searchByName = () => {
    // Possible API call to get responses
		// return updatedCocktails.filter(cocktail => {
		// 	return cocktail.strDrink.toLowerCase().includes(keyword.toLowerCase())
		// });
	}

  function App() {
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
            path="/results" 
            render= {() => (
              <AllPodcastsPage
                // givenPodcasts={filteredResults}
                // error={allPError}
              />
            )}
          />
        </Switch>

      </main>
    );
  }
};

export default App;

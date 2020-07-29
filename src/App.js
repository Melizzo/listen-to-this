import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";

const App = () => {
  const [FilteredResults, setFilteredResults] = useState;

  // Functions
  const findResults = () => {
    const byPodcastName = searchByName(searchValue);
    setFilteredResults([...byPodcastName]);
  };

  function App() {
    return (
      <main>
        <Header findResults={findResults} />

        <Switch>
          <Route
            path="/results" 
            render= {() => (
              <AllPodcastsPage
                givenPodcasts={filteredResults}
                error={allCError}
              />
            )}
          />
        </Switch>

      </main>
    );
  }
};

export default App;

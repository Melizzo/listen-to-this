import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ findResults }) => {
  const [searchInput, setSearchInput] = useState("");

  const search = () => {
    findResults(searchInput);
    setSearchInput("");
  };

  const buttonsEnabled = searchInput.trim() !== "";

  return (
    <header>
      <Link to="/">
        <h1 className="app-header-title">Listen To This!</h1>
      </Link>
      <form className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="search for a podcast"
          className="header-search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-label="search"
        />
        <Link to="/results">
          <button
            className="header-search-button"
            onClick={() => search()}
            type="submit"
            disabled={!buttonsEnabled}
          >
            Search
          </button>
        </Link>
      </form>
      <Link to="/favoritePodcasts">
        <button className="header-search-button">View Saved Podcasts</button>
      </Link>
    </header>
  );
};

export default Header;

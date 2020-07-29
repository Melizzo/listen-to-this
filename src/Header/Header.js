import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = (props) => {
  const [searchInput, setSearchInput ] = useState

  const search = () => {
		props.findResults(searchInput);
		setSearchInput('');
	}

  return (
    <header>
        <h1 className="app-header-title">Listen To This!</h1>
        <form className='search-bar'>
						<input
							type="text"
							name="search"
							placeholder="search for a podcast"
							className="header-search"
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							aria-label="search"
						/>
						<Link to='/results'>
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
    </header>
  );
};

export default Header;

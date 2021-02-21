import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { stateContext } from "../StateProvider";

//
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Navbar({ hide }) {
  const globalContext = useContext(stateContext);
  const {
    state: { favPlanets },
    dispatch,
  } = globalContext;

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(" ");
  };

  return (
    <div className="navbar">
      <form className="search">
        <input
          type="text"
          className={hide && "hide"}
          placeholder="Search planets"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>

      <div className="tabs">
        <Link to="/">
          <HomeIcon fontSize="large" />
        </Link>
        <Link to="/favourite">
          <FavoriteIcon fontSize="large" />
        </Link>
        <b>{favPlanets.length}</b>
      </div>
    </div>
  );
}

export default Navbar;

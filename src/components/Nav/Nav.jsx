import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, onLogOut }) => {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
        <Link to="/favorites">
          <button>Favorites</button>
        </Link>
      </Link>
      <button onClick={onLogOut}>Log Out</button>
    </div>
  );
};

export default Nav;

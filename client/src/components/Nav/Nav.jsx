import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, onLogOut, onRandom }) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <SearchBar onSearch={onSearch} onRandom={onRandom} />
      </div>
      <div className={styles.buttonsContainer}>
        <Link to="/about">
          <button className={styles.button}>About</button>
        </Link>
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link>
        <Link to="/favorites">
          <button className={styles.button}>Favorites</button>
        </Link>
        <button onClick={onLogOut}>Log Out</button>
      </div>
    </div>
  );
};

export default Nav;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeStyle.module.css"; // <-- module import
import Card from './Card.jsx';

/* assets */
import picture from './assets/placeholder.png';
import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";

export default function App() {

  const {loading} = useContext(CurrentQuotesContext);
  
  return (
    <div className={styles.appContainer}>
      {/* Dropdown Menu (Top Left) */}
      <div className={styles.navDropdown}>
        <details>
          <summary className={styles.menuTitle}>Menu</summary>
          <ul className={styles.menuList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Folders</a></li>
          </ul>
        </details>
      </div>

      {/* Top Right Logo */}
      <div className={styles.logoContainer}>
        <img
          src="/logo.png"
          alt="logo"
          className={styles.logoImg}
        />

        {/* Search Bar (Top Middle) */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* RECOMMENDED CARDS */}
      <div className={styles.recommended}>
        <h2 className={styles.sectionLabel}>RECOMMENDED</h2>
        <div className={styles.categoryContainer}>
          <Card image={picture} text="" type="image" title="Albert Einstein" size = "small" isClickable = {!loading} name="einstein"/>
          <Card image={picture} text="" type="image" title="Lao Tzu" size = "small" isClickable = {!loading} name="tzu"/>
          <Card image={picture} text="" type="image" title="William Shakespeare" size = "small" isClickable = {!loading} name="shakespeare"/>
          <Card image={picture} text="" type="image" title="Mark Twain" size = "small" isClickable = {!loading} name="twain"/>
        </div>
      </div>

      {/* RECENT CARDS */}
      <div className={styles.Recent}>
        <h2 className={styles.sectionLabel}>RECENT</h2>
        <div className={styles.recentContainer}>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small" isClickable = {true}/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small" isClickable = {true}/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small" isClickable = {true}/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small" isClickable = {true}/>
        </div>
      </div>
    </div>
  );
}

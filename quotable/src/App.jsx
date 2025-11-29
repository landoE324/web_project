import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeStyle.module.css"; // <-- module import
import Card from './Card.jsx';

/* assets */
import picture from './assets/placeholder.png';

export default function App() {
  
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
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
        </div>
      </div>

      {/* RECENT CARDS */}
      <div className={styles.Recent}>
        <h2 className={styles.sectionLabel}>RECENT</h2>
        <div className={styles.recentContainer}>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
          <Card image={picture} text="Placeholder" type="image" title="Placeholder" size = "small"/>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import styles from "./QuotesStyle.module.css";
import Card from "./Card.jsx";

import picture from "./assets/placeholder.png";
import arrow from "./assets/arrow.png"

export default function QuotesPage() {
  
  const [animating, setAnimating] = useState(false);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300); // match CSS animation time
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
  };
  
  return (
    <div className= {styles.appContainer}>
      {/* Dropdown Menu (Top Left) */}
      <div className= {styles.navDropdown}>
        <details>
          <summary className= {styles.menuTitle}>Menu</summary>
          <ul className= {styles.menuList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Folders</a></li>
          </ul>
        </details>
      </div>

      {/* Top Right Logo */}
      <div className= {styles.logoContainer}>
        <img
          src="/logo.png"
          alt="logo"
          className= {styles.logoImg}
        />
      </div>

      {/* Search Bar (Top Middle) */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>

      {/* ---- SINGLE CENTERED CARD ---- */}

      <div className = {styles.cardWrapper}>

      <button className = {styles.arrow} onClick={handlePrev}>
        <img src = {arrow} style = {{transform: "scaleX(-1)"}}/>
      </button>

      <div className={`${styles.cardContainer} ${animating ? styles.shuffle : ""}`}>
          
          <Card 
          image={picture} 
          type = "Quote"
          text = '"A journey of a thousand miles begins with a single step."'
          title = "Lao Tzu"
          size = "large"
          />

      </div>

      <button className = {styles.arrow} onClick={handleNext}>
        <img src = {arrow} />
      </button>

      </div>
    </div>
  );
}

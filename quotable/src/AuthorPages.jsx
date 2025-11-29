import React, { useState } from "react";
import "./QuotesStyle.css";
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
    <div className="app-container">
      {/* Dropdown Menu (Top Left) */}
      <div className="nav-dropdown">
        <details>
          <summary className="menu-title">Menu</summary>
          <ul className="menu-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Folders</a></li>
          </ul>
        </details>
      </div>

      {/* Top Right Logo */}
      <div className="logo-container">
        <img
          src="/logo.png"
          alt="logo"
          className="logo-img"
        />
      </div>

      {/* Search Bar (Top Middle) */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* ---- SINGLE CENTERED CARD ---- */}

      <div className = "card-wrapper">

      <button className = "arrow left" onClick={handlePrev}>
        <img src = {arrow} style = {{transform: "scaleX(-1)"}}/>
      </button>

      <div className={`card-container ${animating ? "shuffle" : ""}`}>
          
          <Card 
          image={picture} 
          type = "Quote"
          text = '"A journey of a thousand miles begins with a single step."'
          title = "Lao Tzu"
          />

      </div>

      <button className = "arrow right" onClick={handleNext}>
        <img src = {arrow} />
      </button>

      </div>
    </div>
  );
}

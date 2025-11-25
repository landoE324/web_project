import React from "react";
import "./QuotesStyle.css";
import Card from "./Card.jsx";

import picture from "./assets/placeholder.png";
import arrow from "./assets/arrow.jpg"

export default function QuotesPage() {
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

      <button className = "arrow left">
        <img src = {arrow} />
      </button>

      <div>
          <Card image={picture} title="Author Name" />
      </div>

      <button className = "arrow right">test2</button>

      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

<div className="page-content" style={{ border: "3px solid red" }}></div>
export default function Layout({ children }) {
  return (
    <div className="app-container">

      {/* Menu */}
      <div className="nav-dropdown">
        <details>
          <summary className="menu-title">Menu</summary>
          <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/folders">Folders</Link></li>
          </ul>
        </details>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </Link>
      </div>

      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Main Page Content */}
      <div className="page-content">
        {children}
      </div>

    </div>
  );
}
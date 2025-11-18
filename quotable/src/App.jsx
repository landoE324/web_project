import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function App() {
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

<div className="logo-container">
<img
    src = "/logo.png"
    alt = "logo"
    className = "logo-img"
/>
</div>


{/* Search Bar (Top Middle) */}
<div className="search-bar">
<input type="text" placeholder="Search..." />
</div>
</div>
);
}
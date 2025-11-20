import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Card from './Card.jsx'

{/*assets*/}
import picture from './assets/placeholder.png'

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


{/* Search Bar (Top Middle) */}
<div className="search-bar">
<input type="text" placeholder="Search..." />
</div>
</div>


{/* Cards */}
<div className = "recommended">
    <h2 className = "section-label">RECOMMENDED</h2>
<div className = "category-container">
<Card image = {picture}></Card>
<Card image = {picture}></Card>
<Card image = {picture}></Card>
<Card image = {picture}></Card>
</div>
</div>

<div className = "Recent">
    <h2 className = "section-label">RECENT</h2>
<div className = "recent-container">
<Card image = {picture}></Card>
<Card image = {picture}></Card>
<Card image = {picture}></Card>
<Card image = {picture}></Card>    
</div>
</div>
</div>
);
}
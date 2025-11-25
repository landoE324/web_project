import React from "react";
import "./About.css";

import Layout from "./Layout.jsx";


export default function About() {
return (
<Layout>
<div className="about-container">
<h1 className="about-title">About Quotable</h1>


<p className="about-text">
<strong>Welcome to Quotable — your personal library of inspiration.</strong>
</p>


<p className="about-text">
Quotable was created to make discovering, saving, and organizing meaningful quotes effortless. Whether you're collecting wisdom from your favorite authors, searching for motivation, or exploring new perspectives, Quotable helps you keep it all in one beautiful, easy-to-use place.
</p>


<p className="about-text">
With simple folder organization, a built-in search tool, and a growing collection of curated quotes, you can build your own archive of ideas that inspire you — anytime, anywhere.
</p>


<p className="about-text">
Quotable isn’t just a website. It’s a space to gather thoughts that matter, revisit the words that move you, and explore voices from throughout history.
</p>


<p className="about-text footer">Welcome to your new quote library. Welcome to <strong>Quotable</strong>.</p>
</div> </Layout>
);
}


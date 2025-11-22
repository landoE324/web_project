import React from "react";
import Layout from "./Layout.jsx";
import Card from "./Card.jsx";
import picture from "./assets/placeholder.png";

export default function Home() {
  return (
    <Layout>
      <div className="recommended">
        <h2 className="section-label">RECOMMENDED</h2>
        <div className="category-container">
          <Card image={picture} />
          <Card image={picture} />
          <Card image={picture} />
          <Card image={picture} />
        </div>
      </div>

      <div className="recent">
        <h2 className="section-label">RECENT</h2>
        <div className="recent-container">
          <Card image={picture} />
          <Card image={picture} />
          <Card image={picture} />
          <Card image={picture} />
        </div>
      </div>
    </Layout>
  );
}
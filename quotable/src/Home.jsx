import React from "react";
import Layout from "./Layout.jsx";
import Card from "./Card.jsx";
import picture from "./assets/placeholder.png";

export default function Home() {
  const recommendedItems = [picture, picture, picture, picture];
  const recentItems = [picture, picture, picture, picture];

  return (
    <Layout>
      {/* Recommended Section */}
      <div className="recommended">
        <h2 className="section-label">RECOMMENDED</h2>
        <div className="category-container">
          {recommendedItems.map((img, index) => (
            <Card key={index} image={img} />
          ))}
        </div>
      </div>

      {/* Recent Section */}
      <div className="recent">
        <h2 className="section-label">RECENT</h2>
        <div className="recent-container">
          {recentItems.map((img, index) => (
            <Card key={index} image={img} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
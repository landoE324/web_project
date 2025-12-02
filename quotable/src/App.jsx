import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeStyle.module.css"; // <-- module import
import Card from './Card.jsx';
import { useNavigate } from "react-router-dom"; 

/* assets */
import picture from './assets/placeholder.png';
import albert from './assets/albert.jpg';
import tzu from './assets/tzu.jpg';
import shakespeare from './assets/shakespeare.jpg';
import twain from './assets/twain.jpg';
import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";
import { RecentContext } from "./RecentContext.jsx";


export default function App() {

  const navigate = useNavigate();

  const {allQuotes, loading, setCurrentArray, setCurrentIndex} = useContext(CurrentQuotesContext);

  const {recent, addRecent} = useContext(RecentContext);

  console.log("allQuotes:", allQuotes);

  const [query, setQuery] = useState("");

  // Filter quotes as user types
  const results =
  query.length > 0 && Array.isArray(allQuotes)
    ? allQuotes.filter(q =>
        (q.text || q.quote || "").toLowerCase().includes(query.toLowerCase()) ||
        (q.author || "").toLowerCase().includes(query.toLowerCase())
      )
    : [];

  
  return (
    <div className={styles.appContainer}>
      {/* Dropdown Menu (Top Left) */}
      <div className={styles.navDropdown}>
        <details>
          <summary className={styles.menuTitle}>
          <div className={styles.bars}>
          <span></span>
          <span></span>
          <span></span>
          </div>
          </summary>
          <ul className={styles.menuList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/folders">Folders</Link></li>
          </ul>
        </details>
      </div>

      {/* Top Right Logo */}
      <div className={styles.logoContainer}>
        <img
          src="/logo.png"
          alt="logo"
          className={styles.logoImg}
          onClick={() => navigate("/")} // your action here
          style={{ cursor: "pointer" }} // shows hand cursor on hover
        />

        {/* Search Bar (Top Middle) */}
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search quotes or authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      

      {query.length > 0 && (
        <div className={styles.searchResults}>
          {results.length === 0 ? (
            <div className={styles.noResults}>No results found</div>
          ) : (
            results.slice(0, 8).map((q, i) => (
              <div
                key={i}
                className={styles.searchItem}
                onClick={() => {
                  const authorQuotes = allQuotes
                    .filter(x => x.author === q.author)
                    .map(x => ({
                      quote: x.text || x.quote,
                      author: x.author
                    }));

                  const index = authorQuotes.findIndex(
                    item => item.quote === (q.text || q.quote)
                  );

                  addRecent({
                  name: q.author.toLowerCase(),   // same as folder name
                  title: q.author,
                  image: picture,                    // search results don't have images
                  });

                  setCurrentArray(authorQuotes);
                  setCurrentIndex(index >= 0 ? index : 0);

                  navigate("/quotes");
                  setQuery("");
                }}
              >
                <strong>{q.author}</strong> — {q.text || q.quote}
              </div>
            ))
          )}
        </div>
      )}
      </div>

      {/* RECOMMENDED CARDS */}
      <div className={styles.recommended}>
        <h2 className={styles.sectionLabel}>RECOMMENDED</h2>
        <div className={styles.categoryContainer}>
          <Card image={albert} text="" type="image" title="Albert Einstein" size = "small" isClickable = {!loading} name="einstein"/>
          <Card image={tzu} text="" type="image" title="Lao Tzu" size = "small" isClickable = {!loading} name="tzu"/>
          <Card image={shakespeare} text="" type="image" title="William Shakespeare" size = "small" isClickable = {!loading} name="shakespeare"/>
          <Card image={twain} text="" type="image" title="Mark Twain" size = "small" isClickable = {!loading} name="twain"/>
        </div>
      </div>

      {/* RECENT CARDS */}
      <div className={styles.Recent}>
        <h2 className={styles.sectionLabel}>RECENT</h2>
         <div className={styles.recentContainer}>
            {recent.length === 0 ? (
              <p>No recent cards.</p>
            ) : (
              recent.map((card, i) => (
                <Card
                  key={i}
                  image={card.image}
                  title={card.title}
                  name={card.name}
                  type="image"
                  size="small"
                  isClickable={true}
                />
              ))
            )}
          </div>
      </div>
    </div>
  );
}

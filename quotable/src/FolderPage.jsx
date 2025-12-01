import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeStyle.module.css";
import Card from './Card.jsx';
import { useNavigate } from "react-router-dom";

/* assets */
import picture from './assets/placeholder.png';
import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";
import { RecentContext } from "./RecentContext.jsx";
import { FolderContext } from "./FolderContext.jsx"; // new context for user folders

export default function FolderPage() {
  const navigate = useNavigate();

  const { allQuotes, loading, setCurrentArray, setCurrentIndex } = useContext(CurrentQuotesContext);
  const { recent, addRecent } = useContext(RecentContext);
  const { folders } = useContext(FolderContext); // get all user-created folders

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
          <summary className={styles.menuTitle}>Menu</summary>
          <ul className={styles.menuList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
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
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        {/* Search Bar */}
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
                      name: q.author.toLowerCase(),
                      title: q.author,
                      image: picture,
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

      {/* USER FOLDERS */}
      <div className={styles.recommended}>
        <h2 className={styles.sectionLabel}>FOLDERS</h2>
        <div className={styles.categoryContainer}>
          {folders.length === 0 ? (
            <p>No folders created yet.</p>
          ) : (
            folders.map((folder, i) => (
              <Card
                key={i}
                image={folder.image || picture} // placeholder if folder has no image
                title={folder.name}
                name={folder.name.toLowerCase()}
                type="image"
                size="small"
                isClickable={true}
                isUserFolder={true} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

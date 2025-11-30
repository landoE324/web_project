import { useEffect, useState } from "react";
import styles from "./QuotesStyle.module.css";
import Card from "./Card.jsx";
import axios from "axios";
import picture from "./assets/placeholder.png";
import arrow from "./assets/arrow.png"
import { useContext } from "react";
import { CurrentQuotesContext } from "./CurrentQuotesContext";

export default function QuotesPage() {

  const { currentArray, currentIndex, setCurrentIndex, currentQuote } = useContext(CurrentQuotesContext);
  const [animating, setAnimating] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentArray.length);
    setAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentArray.length) % currentArray.length);
    setAnimating(false);
  }, 300);
  };
  
  return (
    <div className= {styles.appContainer}>
      {/* Dropdown Menu (Top Left) */}
      <div className= {styles.navDropdown}>
        <details>
          <summary className= {styles.menuTitle}>Menu</summary>
          <ul className= {styles.menuList}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Folders</a></li>
          </ul>
        </details>
      </div>

      {/* Top Right Logo */}
      <div className= {styles.logoContainer}>
        <img
          src="/logo.png"
          alt="logo"
          className= {styles.logoImg}
        />
      </div>

      {/* Search Bar (Top Middle) */}
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>

      {/* ---- SINGLE CENTERED CARD ---- */}

      <div className = {styles.cardWrapper}>

      <button className = {styles.arrow} onClick={handlePrev}>
        <img src = {arrow} style = {{transform: "scaleX(-1)"}}/>
      </button>

      <div className={`${styles.cardContainer} ${animating ? styles.shuffle : ""}`}>
        {currentArray && currentArray.length > 0 && currentArray[currentIndex] ? (
          <Card
            key={currentIndex} // ensures React fully re-renders on index change
            type="quote"
            size="large"
            text={currentArray[currentIndex].quote}
            title={currentArray[currentIndex].author}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>



      <button className = {styles.arrow} onClick={handleNext}>
        <img src = {arrow} />
      </button>

      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import styles from "./QuotesStyle.module.css";
import Card from "./Card.jsx";
import axios from "axios";
import picture from "./assets/placeholder.png";
import arrow from "./assets/arrow.png"

export default function QuotesPage() {
  
  const [animating, setAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quotes, setQuotes] = useState([]);

  const contentArray = quotes.length > 0 ? [quotes[0], quotes[1], quotes[3]] : [];

  const currentQuote = contentArray.length > 0 ? contentArray[currentIndex] : null;

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentArray.length) % contentArray.length);
    setAnimating(false);
  }, 300);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentArray.length) % contentArray.length);
    setAnimating(false);
  }, 300);
  };
  
  useEffect(() => {
    async function loadQuotes() {
      try {
        const res = await fetch("https://echoes.soferity.com/api/quotes");
        const json = await res.json();
        setQuotes(json.data); // json.data is the array of quotes
      } catch (err) {
        console.error("Error fetching quotes:", err);
      }
    }

    loadQuotes(); // call the async function
  }, []); // empty dependency array = run ONLY once when component mounts

  useEffect(() => {
  console.log("Quotes updated:", quotes[1]);
}, [quotes]);


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
          
          {currentQuote ? (
              <Card
                image={picture}
                type="Quote"
                text={`"${currentQuote.quote}"`}
                title={currentQuote.author}
                size="large"
              />
            ) 
            : 
            (
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

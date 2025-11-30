import { createContext, useState, useEffect, useMemo } from "react";

export const CurrentQuotesContext = createContext();

export function CurrentQuotesProvider({ children }) {

  const [currentArray, setCurrentArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allQuotes, setAllQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

    // Hardcoded famous quotes
  const hardcodedFamousQuotes = [
    { author: "Albert Einstein", text: "Imagination is more important than knowledge." },
    { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance you must keep moving." },
    { author: "William Shakespeare", text: "All the world’s a stage, and all the men and women merely players." },
    { author: "William Shakespeare", text: "To thine own self be true." },
    { author: "Mark Twain", text: "The secret of getting ahead is getting started." },
    { author: "Mark Twain", text: "Whenever you find yourself on the side of the majority, it is time to pause and reflect." },
    { author: "Lao Tzu", text: "A journey of a thousand miles begins with a single step." },
    { author: "Lao Tzu", text: "Nature does not hurry, yet everything is accomplished." },
  ];


  useEffect(() => {
    async function loadQuotes() {
      try {
        const res = await fetch("https://echoes.soferity.com/api/quotes?page=1&perPage=100");
        const json = await res.json();
        console.log("All quotes fetched:", json.data)
        setAllQuotes([...json.data, ...hardcodedFamousQuotes]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching quotes:", err);
        setAllQuotes(hardcodedFamousQuotes);
      }
    }
    loadQuotes();
  }, []);
  
  const currentQuote = currentArray.length > 0 ? currentArray[currentIndex] : null;

  const famousFolders = useMemo(() => {
  if (!allQuotes || allQuotes.length === 0) return {};

  const normalize = q => ({
    quote: q.quote || q.text || "", // use quote if exists, otherwise text
    author: q.author || "Unknown Author"
  });

  return {
    einstein: allQuotes.filter(q => q.author === "Albert Einstein").map(normalize),
    tzu: allQuotes.filter(q => q.author === "Lao Tzu").map(normalize),
    twain: allQuotes.filter(q => q.author === "Mark Twain").map(normalize),
    shakespeare: allQuotes.filter(q => q.author === "William Shakespeare").map(normalize),
  };
}, [allQuotes]);

  console.log("Famous folders:", famousFolders);
  console.log("Shakespeare folder:", famousFolders.shakespeare);

  return (
    <CurrentQuotesContext.Provider
      value={{
        loading,
        currentArray,
        setCurrentArray,
        currentIndex,
        setCurrentIndex,
        currentQuote,
        famousFolders
      }}
    >
      {children}
    </CurrentQuotesContext.Provider>
  );
}

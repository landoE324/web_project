import largeStyles from "./QuotesStyle.module.css";
import smallStyles from "./HomeStyle.module.css";
import { useContext } from "react";
import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";
import { useNavigate } from "react-router-dom";
import { RecentContext } from "./RecentContext.jsx";

function Card(props) {

  const {
        allQuotes,
        loading,
        currentArray,
        setCurrentArray,
        currentIndex,
        setCurrentIndex,
        currentQuote,
        famousFolders,} = useContext(CurrentQuotesContext);

  const { addRecent } = useContext(RecentContext);

  const styles = props.size === 'large' ? largeStyles : smallStyles;
  const folder = props.name
  ? famousFolders[props.name.toLowerCase()] || []
  : [];

      console.log("props.name:", props.name);
      console.log("folder:", folder);

  if (props.type !== "image") {
  console.log("Quotes card render:", {
    propsName: props.name,
    currentArray,
    currentIndex,
    currentQuote,
  });
}

  const displayText = props.text ?? "";
  const displayTitle = props.title ?? "Unknown Author";

  const navigate = useNavigate();

  
const openContent = () => {
  const author = props.title;
  if (!author) return;

  // 1. Try to get a predefined folder
  const folderKey = author.toLowerCase().replaceAll(" ", "");
  let quotesArray = famousFolders[folderKey] || [];

  // 2. If NOT in famousFolders → dynamically build it
  if (quotesArray.length === 0) {
    quotesArray = allQuotes
      .filter(q => q.author === author)
      .map(q => ({
        quote: q.text || q.quote,
        author: q.author
      }));
  }

  if (quotesArray.length === 0) return; // fail-safe

  // 3. Add RECENT entry
  addRecent({
  name: props.name || author,
  title: author,
  image: props.image || "/placeholder.png",   // <-- fallback ONLY if missing
  });

  // 4. Pick index (first quote, or the exact quote clicked if available)
  let index = 0;
  if (props.text) {
    index = quotesArray.findIndex(q => q.quote === props.text);
    if (index === -1) index = 0;
  }

  // 5. Save to context
  setCurrentArray(quotesArray);
  setCurrentIndex(index);

  // 6. Navigate
  navigate("/quotes");
};

  return (
    <div 
      className={styles.card} 
      onClick={() => openContent()}
    >
      <div className={styles.square}>
        {props.type === "image" ? (
          <img src={props.image} className={styles.cardImage} alt={props.title} />
        ) : (
          <p className={styles.cardText}>{displayText}</p>
        )}
      </div>
      <h2 className={styles.cardTitle}>{displayTitle}</h2>
    </div>
  );
}

export default Card;
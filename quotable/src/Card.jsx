import largeStyles from "./QuotesStyle.module.css";
import smallStyles from "./HomeStyle.module.css";
import { useContext } from "react";
import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";
import { useNavigate } from "react-router-dom";

function Card(props) {

  const {
        loading,
        currentArray,
        setCurrentArray,
        currentIndex,
        setCurrentIndex,
        currentQuote,
        famousFolders,} = useContext(CurrentQuotesContext);

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

    console.log("isClickable:", props.isClickable, "folder.length:", folder.length);

    if(!props.isClickable || !folder.length)
    {
      return;
    }
    else
    {

      setCurrentArray(folder);
      setCurrentIndex(0);
      setTimeout(() => navigate("/quotes"), 0); 
    }
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
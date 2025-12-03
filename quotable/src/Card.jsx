import largeStyles from "./QuotesStyle.module.css";
import smallStyles from "./HomeStyle.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentQuotesContext } from "./CurrentQuotesContext.jsx";
import { RecentContext } from "./RecentContext.jsx";
import { FolderContext } from "./FolderContext.jsx";

function Card(props) {
  const {
    allQuotes,
    currentArray,
    setCurrentArray,
    currentIndex,
    setCurrentIndex,
    famousFolders,
  } = useContext(CurrentQuotesContext);

  const { addRecent } = useContext(RecentContext);
  const { folders, addToFolder } = useContext(FolderContext);

  const navigate = useNavigate();
  const styles = props.size === "large" ? largeStyles : smallStyles;

  const displayText = props.text ?? "";
  const displayTitle = props.title ?? "Unknown Author";

  const openContent = () => {
    console.log("========== openContent triggered ==========");
    console.log("Card props:", props);
    console.log("Folders available:", folders);

    const authorOrFolder = props.title;
    if (!authorOrFolder) {
      console.log("No title/author, exiting.");
      return;
    }

    let quotesArray = [];

    const folderKey = authorOrFolder.toLowerCase().replaceAll(" ", "");
    if (famousFolders[folderKey]) {
      console.log("Using famous folder:", folderKey);
      quotesArray = famousFolders[folderKey];
    } 

    else if (props.isUserFolder) {
      console.log("This is a user folder card. Searching user folders...");
      const folder = folders.find(f => f.name.toLowerCase() === props.name.toLowerCase());
      if (folder) {
        console.log("Found user folder:", folder);
        quotesArray = folder.cards.map(c => ({
          quote: c.quote,
          author: c.author,
          image: c.image || "/placeholder.png"
        }));
      } else {
        console.log("User folder not found:", props.name);
      }
    } 

    else {
      console.log("Searching allQuotes for author:", authorOrFolder);
      quotesArray = allQuotes
        .filter(q => q.author === authorOrFolder)
        .map(q => ({
          quote: q.text || q.quote,
          author: q.author,
          image: props.image || "/placeholder.png"
        }));
    }

    console.log("quotesArray:", quotesArray);

    if (quotesArray.length === 0) {
      console.log("No quotes found for this card. Exiting openContent.");
      return;
    }

    // Add to recent
    console.log("Adding to recent:", props.name || authorOrFolder);
    addRecent({
      name: props.name || authorOrFolder,
      title: authorOrFolder,
      image: props.image || "/placeholder.png"
    });

    // Determine index
    let index = 0;
    if (props.text) {
      const foundIndex = quotesArray.findIndex(q => q.quote === props.text);
      if (foundIndex !== -1) index = foundIndex;
    }

    console.log("Setting currentIndex:", index);

    // Save context & navigate
    setCurrentArray(quotesArray);
    setCurrentIndex(index);
    console.log("Navigating to /quotes");
    navigate("/quotes");
  };

  const handleAddToFolder = () => {
    const folderName = prompt(
      "Enter the folder name to add this card to:",
      folders.length > 0 ? folders[0].name : ""
    );
    if (!folderName) return;

    addToFolder(folderName, {
      quote: props.text,
      author: props.title,
      image: props.image,
      name: props.name || props.title,
    });
    alert(`Added to folder "${folderName}"!`);
  };

  return (
    <div className={styles.card} onClick={openContent}>
      <div className={styles.square}>
        {props.type === "image" ? (
          <img
            src={props.image || "/placeholder.png"}
            className={styles.cardImage}
            alt={props.title}
          />
        ) : (
          <p className={styles.cardText}>{displayText}</p>
        )}
      </div>

      <h2 className={styles.cardTitle}>{displayTitle}</h2>

      {props.type === "quote" && (
        <button
          className={styles.addToFolderButton}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToFolder();
          }}
        >
          + Add to Folder
        </button>
      )}
    </div>
  );
}

export default Card;

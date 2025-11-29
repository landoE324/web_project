import largeStyles from "./QuotesStyle.module.css";
import smallStyles from "./HomeStyle.module.css";


function Card(props) {

  const styles = props.size === 'large' ? largeStyles : smallStyles;
  const folder = props.name === ''

  const openContent = () => {
    
  };

  return (
    <div 
      className={styles.card} 
      onClick={() => openContent(folder))}
    >
      <div className={styles.square}>
        {props.type === "image" ? (
          <img src={props.image} className={styles.cardImage} alt={props.title} />
        ) : (
          <p className={styles.cardText}>{props.text}</p>
        )}
      </div>
      <h2 className={styles.cardTitle}>{props.title}</h2>
    </div>
  );
}

export default Card;
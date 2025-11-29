
function Card(prop)
{
    return(
        <div 
        className = "card"
        onClick={() => alert("Card clicked!")}
        >
            <div className = "square">

            {
            prop.type === "image" ? 
            (
          <img src={prop.image} className="card-image" />
            ) : 
             (
          <p className="card-text">{prop.text}</p>
             )
             }

            </div>
            <h2 className = "card-title">{prop.title}</h2>
        </div>
    );
}

export default Card
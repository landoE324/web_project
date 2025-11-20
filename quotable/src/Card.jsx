
function Card(prop)
{
    return(
        <div 
        className = "card"
        onClick={() => alert("Card clicked!")}
        >
            <img className= "card-image" src= {prop.image} alt="Category"></img>
            <h2 className = "card-title">Placeholder</h2>
        </div>
    );
}

export default Card
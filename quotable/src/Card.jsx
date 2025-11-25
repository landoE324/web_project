
function Card(prop)
{
    return(
        <div 
        className = "card"
        onClick={() => alert("Card clicked!")}
        >
            <div className = "square">
            <img className= "card-image" src= {prop.image} alt="Category"></img>
            </div>
            <h2 className = "card-title">Placeholder</h2>
        </div>
    );
}

export default Card
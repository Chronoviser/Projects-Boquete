import { Link } from "react-router-dom";

function Cocktail({ drink }) {
    return (
        <div className="cocktail-cocktail" >
            <img
                style={{ width: "100%", height: "65%" }}
                src={drink.img} alt="" />
            <div style={{ padding: "10px" }}>
                <h2 style={{ width: "100%" }}>{drink.name}</h2>
                <strong>{drink.glass}</strong>
                <p style={{ color: "grey" }}>{drink.info}</p>
                <Link to={`/cocktail-bar-app/cocktail/${drink.id}`}><button className="cocktail-cocktail-details" >Details</button></Link>
            </div>
        </div>
    );
}

export default Cocktail;
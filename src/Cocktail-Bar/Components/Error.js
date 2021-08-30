import { Link } from "react-router-dom";

function Error() {
    return (
        <div style={{ margin: "4% 2%" }}>
            <Link to="/cocktail-bar-app"><button className="cocktail-cocktail-details">Back Home</button></Link>
            <h1>No Such Pahe :(</h1>
        </div>
    );
}

export default Error;
function MenuItem({ item }) {
    return (
        <div className="menuItem">
            <img className="image" src={item.img} alt={item.name} />
            <div className="namePriceDesc">
                <div className="nameAndPrice">
                    <p>{item.name}</p>
                    <p style={{ color: "darkGoldenRod" }}>₹{item.price}</p>
                </div>
                <hr className="dottedLine" />
                <p style={{ color: "#555", textAlign: "start" }}>{item.desc}</p>
            </div>
        </div>
    );
}

export default MenuItem;
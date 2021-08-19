function List({ people }) {
    return (
        <div style={{ padding: "20px" }}>
            {
                people.map((person, i) => {
                    return <article key={i}>
                        <img src={person.image} alt={person.name} style={{ height: "200px", float: "left" }} />
                        <div style={{ height: "200px", marginLeft: "0px" }}>
                            <h4>{person.name}</h4>
                            <p>{person.age} years</p>
                            <p>{person.birthdate}</p>
                        </div>
                        <hr />
                    </article>
                }
                )
            }
        </div>
    );
}

export default List;
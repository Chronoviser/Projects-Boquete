function DetailItem({title, data}) {
    return (
        <div style={{display: "flex", fontWeight: "bold", alignItems: "center"}}>
            <p style={{color: "teal", background: "rgb(0, 128, 128, 0.1)", padding: "5px", borderRadius: "5px"}}>{title}:</p>
            <p>&nbsp;&nbsp; {data}</p>
        </div>
    );
}

export default DetailItem;
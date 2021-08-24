import { useState } from "react";

function ColorTile({ color }) {
    const [alert, setAlert] = useState(false);

    function showAlert(hexValue) {
        setAlert(true);
        navigator.clipboard.writeText(`#${hexValue}`)
        setInterval(() => {
            setAlert(false);
        }, 3000)
    }

    return (
        <div
            style={{ backgroundColor: `rgb(${color.rgb.join(',')})`, height: "120px", width: "100%", color: `${color.type === 'tint' ? 'black' : 'white'}`, cursor: "pointer" }}
            onClick={() => showAlert(color.hex)}>
            <p>{color.weight}% </p>
            <p>#{color.hex}</p>
            {
                alert ? <p style={{ color: "grey", fontSize: "12px" }}>hex Copied!</p> : null
            }
        </div>
    );
}

export default ColorTile;
import { useState } from "react";
import '../Color-Generator-App.css';

function Header({ updateColor }) {

    const [color, setColor] = useState('#fff');

    return (
        <div className="colorGeneratorHeader">
            <h2>Color Generator</h2>
            <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="colorGeneratorInput" />
            <button
                onClick={() => updateColor(color)}
                className="colorGeneratorButton">Submit</button>
        </div>
    );
}

export default Header;
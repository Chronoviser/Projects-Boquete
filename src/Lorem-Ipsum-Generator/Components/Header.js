import { useState } from "react";

function Header({ onGenerate }) {
    const [val, setVal] = useState(1);

    function updateVal(_val) {
        if (_val < 1) setVal(1);
        else setVal(_val);
    }

    return (
        <div>
            <h1>Tired of Boring Lorem Ipsum ?</h1>
            <div className="ligGenerator">
                <label
                    htmlFor="numberOfParas">Paragraphs:</label>
                <input
                    type="number"
                    name="numberOfParas"
                    min="1"
                    max="20"
                    placeholder="1"
                    className="ligInputBox"
                    onChange={(e) => updateVal(e.target.value)} />
                <button
                    className="ligButton"
                    onClick={() => onGenerate(val)}>Generate</button>
            </div>
        </div>
    )
}

export default Header;
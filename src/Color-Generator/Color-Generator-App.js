import Header from './Components/Header';
import Content from './Components/Content';
import { useState } from 'react';
import Values from 'values.js';

function ColorGeneratorApp() {

    const [colors, setColors] = useState([]);

    function updateColor(color) {
        try {
            const _colors = new Values(color).all(10);
            console.log(_colors);
            setColors(_colors);
        }
        catch (e) {
            console.log('No Such Color');
        }
    }

    return (
        <div style={{ background: "azure" }}>
            <Header updateColor={updateColor} />
            <Content colors={colors} />
        </div>
    );
}

export default ColorGeneratorApp;
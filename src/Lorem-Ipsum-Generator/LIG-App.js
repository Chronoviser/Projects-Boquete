import { useState } from "react";
import Header from './Components/Header';
import Content from './Components/Content';
import './LIG-App.css';

function LIGApp() {
    const [numberOfParas, setNumberOfParas] = useState(1);

    return (
        <div className="ligBody">
            <Header onGenerate={setNumberOfParas} />
            <Content n={numberOfParas} />
        </div>
    );

}

export default LIGApp;
import './FAQ-App.css';
import data from './Data/data';
import Item from './Components/Item';

function FAQApp() {
    return (
        <div>
            <div style={{ background: "white", padding: "20px", margin: "5% 15% 5% 15%", display: "flex", justifyContent: "space-around" }}>
                <h2 style={{ width: "22%", color: "#333" }}>Frequently Asked Questions</h2>
                <section style={{ width: "60%", color: "#222" }}>
                    {
                        data.map((item, i) => (
                            <Item ques={item.ques} ans={item.ans} key={i} />
                        ))
                    }
                </section>
            </div>
        </div>
    );
}

export default FAQApp;
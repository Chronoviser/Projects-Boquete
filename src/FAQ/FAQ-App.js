import './FAQ-App.css';
import data from './Data/data';
import Item from './Components/Item';

function FAQApp() {
    return (
        <div className="parentWrapper">
            <section className="parentSection" >
                <h2> Frequently Asked Questions </h2>
                <div style={{ width: "60%", color: "#222" }}>
                    {
                        data.map((item, i) => (
                            <Item ques={item.ques} ans={item.ans} key={i} />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}

export default FAQApp;
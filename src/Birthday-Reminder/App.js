import { useState } from 'react';
import List from './Components/List';
import data from './data/data';

function BirthdayApp() {

    const [people, setPeople] = useState(data);

    return (
        <>
            <header><h2>Birthday Reminder</h2></header>
            <section style={{ margin: "10px", padding: "20px" }}>
                <h3>{people.length} Birthdays today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}> Clear All </button>
            </section>
        </>
    );
}

export default BirthdayApp;
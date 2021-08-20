import { useState } from 'react';
import List from './Components/List';
import data from './data/data';
import Styled from 'styled-components';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardFieldset,
    CardButton
} from "../Styled-Components/Card";

const StyledButton = Styled(CardButton)`
    width: 200px;
`

function BirthdayApp() {

    const [people, setPeople] = useState(data);

    return (
        <CardWrapper>
            <CardHeader>
                <CardHeading>
                    Birthday Reminder
                </CardHeading>
            </CardHeader>
            <section style={{ padding: "2px" }}>
                <h3 style={{ backgroundColor: "azure", padding: "10px" }}>{people.length} Birthdays today</h3>
                <List people={people} />
                <CardFieldset>
                    <StyledButton onClick={() => setPeople([])}> Clear All </StyledButton>
                </CardFieldset>
            </section>
        </CardWrapper>
    );
}

export default BirthdayApp;
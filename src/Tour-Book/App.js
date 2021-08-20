import { useState } from 'react';
import TourPage from './components/Tour-Page';
import data from './data/data';
import { CardHeading, CardButton } from '../Styled-Components/Card';
import AddTourPage from './components/Add-Tour-Page';
import styled from 'styled-components';

const StyledButton = styled(CardButton)`
    width: 20%;
    margin: 0 40% 0 40%;
    background-color: teal;
`

function TourBookApp() {

    const [tours, setTours] = useState(data);
    const [showAddTour, setShowAddTour] = useState(false);

    function updateTours(newTour) {
        if (newTour) {
            setTours([...tours, newTour]);
        }
        setShowAddTour(false);
    }

    return (
        <div>
            <CardHeading>
                Tour Book
            </CardHeading>
            <StyledButton onClick={() => setShowAddTour(!showAddTour)}>{showAddTour ? 'Back' : 'Add New Tour Experience'}</StyledButton>
            {
                !showAddTour
                    ? tours.map((tour, i) => (
                        <TourPage place={tour.place} exp={tour.exp} img={tour.img} key={i} />
                    ))
                    : <AddTourPage onAddTour={updateTours} />
            }
        </div>
    );
}

export default TourBookApp;
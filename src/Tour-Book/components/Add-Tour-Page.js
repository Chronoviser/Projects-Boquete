import { useState } from 'react';
import styled from 'styled-components';
import {
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardButton
} from '../../Styled-Components/Card';


const StyledDiv = styled.div`
    margin: 15px 25% 15px 25%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    padding: 20px;
    border-radius: 15px;
`


function AddTourPage({ onAddTour }) {

    const [place, setPlace] = useState('');
    const [exp, setExp] = useState('');
    const [img, setImg] = useState('');

    function reqAdd() {
        if (place && exp && img) {
            let newTour = {
                id: Math.floor(Math.random() * 1000),
                place: place,
                exp: exp,
                img: img
            }

            onAddTour(newTour);
        }

        setPlace('');
        setExp('');
        setImg('');
    }

    return (
        <StyledDiv>
            <CardHeader>
                <CardHeading>Add Your New Travel Experience</CardHeading>
            </CardHeader>

            <CardBody>
                <CardFieldset>
                    <CardInput placeholder="What was the Place?" type="text" required onChange={(e) => setPlace(e.target.value)} />
                </CardFieldset>

                <CardFieldset>
                    <CardInput placeholder="Write Your Experience here :)" type="text" required onChange={(e) => setExp(e.target.value)} />
                </CardFieldset>

                <CardFieldset>
                    <CardInput placeholder="image url of that place" type="text" required onChange={(e) => setImg(e.target.value)} />
                    <CardIcon className="fa fa-eye" eye small />
                </CardFieldset>

                <br /><br /><br />

                <CardFieldset>
                    <CardButton type="button" onClick={reqAdd}>Save</CardButton>
                </CardFieldset>
            </CardBody>
        </StyledDiv>
    );
}

export default AddTourPage;
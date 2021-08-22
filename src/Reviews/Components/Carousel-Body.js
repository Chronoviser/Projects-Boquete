import data from '../Data/data';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    overflow: hidden;
    padding: 30px;
    background: white;
    margin: 2% 30% 2% 30%;
    width: 40%;
    height: 70vh;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0px 20px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    justify-content: space-around;
    position: relative;
`

const StyledLeftCaret = styled(BsFillCaretLeftFill)`
    width: 50px;
    height: 20px;
    color: deepskyblue;
`

const StyledRightCaret = styled(BsFillCaretRightFill)`
    width: 50px;
    height: 20px;
    color: deepskyblue;
`

const StyledButton = styled.button`
    color: blue;
    background-color: lightblue;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        color: white;
        background-color: deepskyblue;
    }
`

const StyledImage = styled.img`
    height: 25vh;
    width: 15vw;
    src: ${props => props.src};
    alt: ${props => props.alt};
    border-radius: 50%;
`

const StyledName = styled.p`
 font-weight: bold;
 font-size: 20px;
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
const StyledProf = styled.p`
 font-size: 20px;
 font-weight: bold;
 font-family: 'Courier New', Courier, monospace;
 color: deepskyblue;
`

const StyledExp = styled.p`
 color: grey;
 height: 19vh;
`



function CarouselBody() {
    const n = data.length;
    const [index, setIndex] = useState(0);
    const review = data[index];

    function next() {
        setIndex((index + 1) % n);
    }

    function prev() {
        if (index - 1 < 0) setIndex(n - 1);
        else setIndex(index - 1);
    }

    function random() {
        setIndex(Math.floor(Math.random() * 10) % n);
    }

    return (
        <StyledWrapper>
            <div>
                <StyledImage alt={review.name} src={review.img} />
            </div>
            <div>
                <StyledName>{review.name}</StyledName>
                <StyledProf>{review.prof}</StyledProf>
                <StyledExp>{review.exp}</StyledExp>
                <StyledLeftCaret onClick={prev} />
                <StyledRightCaret onClick={next} />
                <br />
            </div>
            <br />
            <StyledButton onClick={random}>Surprise Me</StyledButton>
        </StyledWrapper >
    );
}

export default CarouselBody;
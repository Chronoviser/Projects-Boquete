import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 15px 25% 15px 25%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    padding: 20px;
    border-radius: 15px;
`
const StyledImage = styled.img`
    width: 100%;
    src: url(props.src);
    alt: "tour place";
`

function TourPage({ place, exp, img }) {
    return (
        <StyledDiv>
            <StyledImage src={img} alt={place} />
            <h3>{place}</h3>
            <p>{exp}</p>
        </StyledDiv>
    );
}

export default TourPage;
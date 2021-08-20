import Styled from 'styled-components';

const StyledArticle = Styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 500px;
    height: 180px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`
const Text = Styled.p`
    color: #e5195f; 
    font-size: 20px; 
`

function List({ people }) {
    return (
        <div style={{ padding: "20px" }}>
            {
                people.map((person, i) => {
                    return <StyledArticle key={i}>
                        <img src={person.image} alt={person.name} style={{ height: "200px", float: "left" }} />
                        <div style={{ height: "100%" }}>
                            <h3>{person.name}</h3>
                            <Text>{person.age} years</Text>
                            <Text>{person.birthdate}</Text>
                        </div>
                    </StyledArticle>
                }
                )
            }
        </div>
    );
}

export default List;
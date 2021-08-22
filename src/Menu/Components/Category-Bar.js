import styled from 'styled-components';

const Category = styled.button`
    border: none;
    margin: 1%;
    font-size: 16px;
    color: goldenrod;
    background-color: white;
    padding: 10px 15px;
    border-radius: 5px;
    transition: 0.5s;   

    &:hover {
        background-color: goldenrod;
        color: white;
    }
`

function CategoryBar({ onClick }) {

    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];

    return (
        <div className="categoryBar">
            {
                categories.map((category, i) =>
                    <Category key={i} onClick={() => onClick(category)}>{category}</Category>)
            }
        </div>
    );
}

export default CategoryBar;
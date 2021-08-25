import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const MenuIcon = styled(FaBars)`
    font-size: 40px;
    display: block;
    color: cornflowerblue;
    margin: 20px;
`

const StyledButton = styled.button`
    border: none;
    padding: 5px;
    width: 100px;
    color: white;
    background-color: #333;
    transition: 0.25s;
    cursor: pointer;
    border-radius: 5px;
    position: absolute;
    top: 40%;

    &:hover {
        background-color: grey;
    }
`

function Home() {

    const { openSideBar, openModal } = useGlobalContext();

    return (
        <main>
            <MenuIcon onClick={openSideBar} />
            <StyledButton onClick={openModal}> Show Modal</StyledButton>
        </main>
    );
}

export default Home;
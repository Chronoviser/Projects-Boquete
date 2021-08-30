import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
`


function Navbar() {
    return (
        <nav className="cocktail-nav" >
            <StyledLink to="/cocktail-bar-app">
                <p style={{ fontSize: "24px" }}>The<strong style={{ color: "teal" }}>Cocktail</strong>DB</p>
            </StyledLink>
            <div className="cocktail-nav-pages">
                <StyledLink to="/cocktail-bar-app"><p>Home</p></StyledLink>
                <StyledLink to="/cocktail-bar-app/About"><p>About</p></StyledLink>
            </div>
        </nav>
    );
}

export default Navbar;
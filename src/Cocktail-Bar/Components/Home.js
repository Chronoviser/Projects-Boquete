import React from 'react';
import { useGlobalContext } from './Context';
import Cocktails from './Cocktails';

function Home() {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value);
    }

    return (
        <>
            <div className="cocktail-searchbox">
                <p className="cocktail-searchbox-title">Search Your Favorite Cocktail</p>
                <input
                    type="text"
                    ref={searchValue} onChange={searchCocktail}
                    className="cocktail-searchbox-input"
                />
            </div>
            <Cocktails />
        </>
    );
}

export default Home;
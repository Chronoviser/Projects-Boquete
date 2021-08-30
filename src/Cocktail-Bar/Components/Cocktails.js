import Cocktail from './Cocktail';
import { useGlobalContext } from './Context';
import Loading from './Loading';

function Cocktails() {

    const { cocktails, loading } = useGlobalContext();

    if (loading) return <Loading />;

    if (cocktails.length < 1) return <h1>No Such Cocktail</h1>;

    return (
        <div className="cocktail-cocktails">
            <h1>Cocktails</h1>
            <div className="cocktail-cocktails-grid">
                {
                    cocktails.map((drink, i) => <Cocktail key={i} drink={drink} />)
                }
            </div>
        </div>
    );
}

export default Cocktails;
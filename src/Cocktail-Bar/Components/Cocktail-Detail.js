import DetailItem from "./Detail-Item";
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Loading from "./Loading";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function CocktailDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function getCocktail() {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();

                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: img,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                    } = data.drinks[0]

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4
                    ]

                    const newCocktail = {
                        name, img, info, category, glass, instructions, ingredients
                    }

                    setCocktail(newCocktail);
                }
                else setCocktail(null);

                setLoading(false);
            }
            catch (e) {
                console.log(e);
                setLoading(false);
            }
        }

        getCocktail();
    }, [id])


    if (loading) return <Loading />;

    const { name, img, category, info, glass, instructions, ingredients } = cocktail;

    return (
        <div style={{ margin: "4% 2%" }}>
            <Link to="/cocktail-bar-app"><button className="cocktail-cocktail-details">Back Home</button></Link>
            <h1>{name}</h1>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "4%" }}>
                <img style={{ width: "40%" }} src={img} alt="" />
                <div style={{ width: "50%", textAlign: "start", marginLeft: "2%" }}>
                    <DetailItem title="Name" data={name} />
                    <DetailItem title="Category" data={category} />
                    <DetailItem title="Info" data={info} />
                    <DetailItem title="Glass" data={glass} />
                    <DetailItem title="Instructions" data={instructions} />
                    <DetailItem title="Ingredients" data={ingredients} />
                </div>
            </div>
        </div>
    );
}

export default CocktailDetail;
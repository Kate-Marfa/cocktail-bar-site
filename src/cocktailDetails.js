import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CocktailDetails({ addToCart }) {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      const res = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setCocktail(data.drinks?.[0] || null);
    };
    fetchCocktail();
  }, [id]);

  if (!cocktail) return <p>Loading...</p>;

  const handleOrderClick = () => {
    if (cocktail) {
      console.log("cocktail:", cocktail);
      addToCart(cocktail);
    } else {
      console.log("cocktail is undefined");
    }
  };

  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <button onClick={handleOrderClick}>Order</button>
    </div>
  );
}

import React from "react";
import useFetchCocktails from "./UseFetchCocktails";

export function MainPage({ addToCart }) {
  const { data, loading, error } = useFetchCocktails({
    apiUrl: "https://thecocktaildb.com/api/json/v1/1/random.php",
  });

  const drinks = data?.drinks ?? [];
  const cocktail = drinks[0];

  const handleOrderClick = () => {
    if (cocktail) {
      console.log("cocktail:", cocktail);
      addToCart(cocktail);
    } else {
      console.log("cocktail is undefined");
    }
  };

  return (
    <>
      <h2 className="recommendation-instruction">Для вибору коктелю скористайтеся пошуком або фільтром</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cocktail && (
        <div className="recommendation-cocktail-card">
          <span className="label">Recommendation for you:</span>
          <h3>{cocktail.strDrink}</h3>
          <img src={cocktail.strDrinkThumb} alt="" width="200" />
          <button onClick={handleOrderClick}>Order</button>
        </div>
      )}
    </>
  );
}

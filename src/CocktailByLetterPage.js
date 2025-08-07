import React from "react";
import { useParams } from "react-router-dom";
import useFetchCocktails from "./UseFetchCocktails";

export default function CocktailByLetterPage() {
  const { letter } = useParams();

  const { data, loading, error } = useFetchCocktails({
    apiUrl: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const cocktails = data?.drinks ?? [];

  return (
    <div>
      <h2>Cocktail on "{letter}"</h2>
      {cocktails.length === 0 ? (
        <p>There are no cocktails for this letter.</p>
      ) : (
        <ul>
          {cocktails.map((drink) => (
            <li key={drink.idDrink}>{drink.strDrink}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

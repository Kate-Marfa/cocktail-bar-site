import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchCocktails from "./UseFetchCocktails";

export default function CocktailList({ searchQuery }) {
  const { letter } = useParams();
  const query = searchQuery || letter || "";

  const apiUrl = useMemo(() => {
    const q = query.trim();
    if (!q) return null;
    if (q.length === 1) {
      return `https://thecocktaildb.com/api/json/v1/1/search.php?f=${encodeURIComponent(
        q
      )}`;
    }
    return `https://thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
      q
    )}`;
  }, [query]);

  const { data, loading, error } = useFetchCocktails({ apiUrl });
  const drinks = data?.drinks ?? [];

  return (
    <section>
      {loading && <p>Loading</p>}
      {error && <p role="alert">{String(error)}</p>}
      {!loading && !error && apiUrl && drinks.length === 0 && (
        <p>Nothing found.</p>
      )}

      <ul className="cocktails-grid">
        {drinks.map((drink) => (
          <li key={drink.idDrink}>
            <Link
              to={`/all-cocktails/${drink.idDrink}`}
              className="cocktail-card"
            >
              <h4>{drink.strDrink}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// const apiUrl = useMemo(() => {
//  const q = (searchQuery || "").trim();
//     if (!q) return null;
//     if (q.length === 1) {
//       return `https://thecocktaildb.com/api/json/v1/1/search.php?f=${encodeURIComponent(
//         q
//       )}`;
//     }
//     return `https://thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
//       q
//     )}`;
//   }, [searchQuery]);

//   const { data, loading, error } = useFetchCocktails({ apiUrl });
//   const drinks = data?.drinks ?? [];

//   return (
//     <section>
//       {loading && <p>Loading</p>}
//       {error && <p role="alert">{String(error)}</p>}
//       {!loading && !error && apiUrl && drinks.length === 0 && (
//         <p>Nothing found.</p>
//       )}

//       <ul className="cocktails-grid">
//         {drinks.map((drink) => (
//           <li key={drink.idDrink}>
//             <Link
//               to={`/all-cocktails/${drink.idDrink}`}
//               className="cocktail-card"
//             >
//               <h4>{drink.strDrink}</h4>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

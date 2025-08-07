import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page";
import CocktailList from "./cocktail-list";
import CocktailDetails from "./cocktailDetails";
// import CocktailByLetterPage from "./CocktailByLetterPage";

export default function AppRoutes({ searchQuery, addToCart }) {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage addToCart={addToCart} />} />
      <Route
        path="/all-cocktails"
        element={
          <CocktailList searchQuery={searchQuery} addToCart={addToCart} />
        }
      />
      <Route
        path="/all-cocktails/:id"
        element={<CocktailDetails addToCart={addToCart} />}
      />
      <Route
        path="/cocktail-by-letter/:letter"
        element={<CocktailList addToCart={addToCart} />}
      />
    </Routes>
  );
}

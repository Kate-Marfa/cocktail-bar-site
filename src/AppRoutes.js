import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { MainPage } from "./main-page";
import CocktailList from "./cocktail-list";
import CocktailDetails from "./cocktailDetails";

export default function AppRoutes({ searchQuery }) {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route
        path="/all-cocktails"
        element={<CocktailList searchQuery={searchQuery} />}
      />
      <Route exact path="/all-cocktails/:id" element={<CocktailDetails />} />
    </Routes>
  );
}

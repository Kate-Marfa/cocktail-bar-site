import React from "react";
import {Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/all-cocktails" element={<MainPage />} />
      <Route exact path="/cocktail" element={<MainPage />} />
    </Routes>
  );
  }
  

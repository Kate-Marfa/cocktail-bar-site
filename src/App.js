import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./glass2.svg";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <input />
        <div className="basket"></div>
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

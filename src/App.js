import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./glass2.svg";
import cart from './cart.svg'
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
        <input type="text" />
        <button type="button">Пошук</button>
        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

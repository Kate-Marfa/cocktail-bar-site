import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./glass2.svg";
import cart from "./cart.svg";
import AppRoutes from "./AppRoutes";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate("/all-cocktails")
  };
  return (
    <div className="App">
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="input-cocktail"
            placeholder="Search a cocktail..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <div className="cart">
          <img src={cart} alt="cart" />
        </div>
      </header>
      <main>
        <AppRoutes searchQuery={searchQuery} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

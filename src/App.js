import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./glass2.svg";
import cart from "./cart.svg";
import AppRoutes from "./AppRoutes";
// import useCart from "./useCart";
import CartModal from "./CartModal";
import SearchByAlphabet from "./search-by-alphabet";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      alert("First, choose a cocktail.");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    console.log("Замовлені коктейлі:", cartItems);
  };

  const addToCart = (cocktail) => {
    setCartItems((prevItems) => [...prevItems, cocktail]);
  };

  const onClear = () => {
    setCartItems([]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate("/all-cocktails");
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

        <div className="cart-icon" onClick={handleCartClick}>
          <img src={cart} alt="cart" />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>
        <CartModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cartItems={cartItems}
          onConfirm={() => {
            handleConfirm();
            setIsModalOpen(false);
            onClear();
          }}
        />
      </header>
      <main>
        <AppRoutes searchQuery={searchQuery} addToCart={addToCart} />
      </main>
      <footer>
        <SearchByAlphabet />
      </footer>
    </div>
  );
}

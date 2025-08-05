import { useState } from "react";

export default function useCart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (cocktail) => {
        setCartItems((prev) => [...prev, cocktail]);
    };

    const clearCart = () => setCartItems([]);

    return {
      cartItems,
      addToCart,
      clearCart,
      cartCount: cartItems.length,
    };
}
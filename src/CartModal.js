import React from "react";
import ReactDOM from "react-dom";

export default function CartModal({ isOpen, onClose, cartItems, onConfirm }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p onClick={onClose}>x</p>
        <h3>Your order:</h3>
        <ul>
          {cartItems.map((item, id) => (
            <li key={id}>{item.strDrink}</li>
          ))}
        </ul>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>,
    document.body
  );
}

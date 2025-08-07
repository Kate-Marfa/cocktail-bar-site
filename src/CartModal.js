import React from "react";
import ReactDOM from "react-dom";

export default function CartModal({ isOpen, onClose, cartItems, onConfirm }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p onClick={onClose} className="close-button">
          x
        </p>
        <h3 className="order-label">Your order:</h3>
        <ul className="ul-element">
          {cartItems.map((item, id) => (
            <div className="modal-info" key={id}>
              <li className="li-modal">{item.strDrink}</li>
              <img className="img-modal" src={item.strDrinkThumb} />
            </div>
          ))}
        </ul>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>,
    document.body
  );
}

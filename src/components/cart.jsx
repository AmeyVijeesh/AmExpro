import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Cart.css"; // Import your CSS file

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const onCheckoutClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-details">
            <span className="cart-item-name">{item.name}</span>
          </div>
          <span className="cart-item-price">${item.price}</span>
          <button
            onClick={() => removeFromCart(item)}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="checkout-total-container">
          <button className="checkout-button" onClick={onCheckoutClick}>
            Checkout
          </button>
          <p className="total-items">Total items: {cart.length}</p>
        </div>
      )}

      {cart.length <= 0 && (
        <p style={{ textAlign: "center", fontSize: "1.6rem" }}>
          Nothing here! Add some items <NavLink to="/items">here</NavLink>.
        </p>
      )}
    </div>
  );
};

export default Cart;

{/* Work in Progress */}

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const { state } = useLocation();
  const total = state && state.total;
  const cartLength = state && state.cartLength;
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    setIsPaymentComplete(true);
  };

  return (
    <div>
      <div className="bady1">
        <div>
          <div className="box-form1">
            <div className="left">
              <div className="overlay">
                <h1>AmExpro</h1>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  Add your credentials to checkout.
                </p>
              </div>
            </div>
            <div className="right">
              <h5>Checkout</h5>
              <p
                style={{
                  color: "#000",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                Total Amount: ${total}
              </p>{" "}
              <p
                style={{
                  color: "#000",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                Total Items: {cartLength}
              </p>
              <div className="inputs">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Card Number"
                />
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="CVV"
                />
                <br />{" "}
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  placeholder="Name on Card"
                />
              </div>
              <br />
              <button
                onClick={() => {
                  alert("Work in Progress");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Items from "./components/items.jsx";
import Cart from "./components/cart.jsx";
import ItemDetail from "./components/item.jsx";
import ForgotPassword from "./components/password";
import Checkout from "./components/checkout.jsx";
import UserCart from "./UserCart";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "mdbootstrap/css/mdb.min.css";

function App() {
  const [cart, setCart] = useState([]);
  const [user] = useAuthState(auth);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <Router>
      <div>
        <Navbar auth={auth} />
        <section>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />{" "}
            <Route
              path="/item/:id"
              element={<ItemDetail addToCart={addToCart} user={user} />}
            />
            <Route
              path="/items"
              element={<Items cart={cart} addToCart={addToCart} user={user} />}
            />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} removeFromCart={handleRemoveFromCart} />
              }
            />{" "}
            <Route path="/user/cart" element={<UserCart user={user} />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;

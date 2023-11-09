import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const Navbar = ({ auth }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Use useEffect to listen to changes in the user's authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is logged out
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, [auth]);

  const onLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        setUser(null);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div
      class="navbar navbar-inverse"
      style={{ backgroundColor: "black", overflowX: "hidden" }}
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="navbar-header">
              <button
                class="navbar-toggle"
                data-target="#mobile_menu"
                data-toggle="collapse"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a
                href="#"
                class="navbar-brand"
                style={{ fontSize: "2.5rem", color: "#fff" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                AmExpro
              </a>
            </div>

            <div class="navbar-collapse collapse" id="mobile_menu">
              <ul class="nav navbar-nav">
                <li>
                  <a href="">
                    <NavLink to="/home">Home</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    About <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">About AmExpro</a>
                    </li>
                    <li>
                      <a href="#">Legacy</a>
                    </li>
                    <li>
                      <a href="#">About the Creator</a>
                    </li>
                    <li>
                      <a href="#">About Four</a>
                    </li>
                    <li>
                      <a href="#">About Five</a>
                    </li>
                    <li>
                      <a href="#">About Six</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <NavLink to="/items">Items</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <ul class="nav navbar-nav">
                <li>
                  <form action="" class="navbar-form">
                    <div class="form-group"></div>
                  </form>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-shopping-cart"></span>{" "}
                    <NavLink to="/cart">Cart</NavLink>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span> Profile
                  </a>
                </li>
                <li>
                  {user ? (
                    // If user is logged in, show the "Logout" link
                    <a href="#" onClick={onLogOut}>
                      <span class="glyphicon glyphicon-log-out"></span> Logout
                    </a>
                  ) : (
                    // If user is not logged in, show the "Login" link
                    <a href="#">
                      <span
                        class="glyphicon glyphicon-log-in"
                        style={{ color: "white" }}
                      ></span>{" "}
                      <NavLink style={{ color: "white" }} to="/login">
                        Login
                      </NavLink>
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

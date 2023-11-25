import React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

const Navbar = ({ auth }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
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
                  <Link to="/home" style={{ color: "#fff" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <Link to="/items" style={{ color: "#fff" }}>
                    Items
                  </Link>
                </li>

                <li>
                  <a href="#">Contact</a>
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
                    <Link to="/cart">Cart</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span> Profile
                  </a>
                </li>
                <li>
                  {user ? (
                    <a href="#" onClick={onLogOut}>
                      <span class="glyphicon glyphicon-log-out"></span> Logout
                    </a>
                  ) : (
                    <a href="#">
                      <span
                        class="glyphicon glyphicon-log-in"
                        style={{ color: "white" }}
                      ></span>{" "}
                      <Link style={{ color: "white" }} to="/login">
                        Login
                      </Link>
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

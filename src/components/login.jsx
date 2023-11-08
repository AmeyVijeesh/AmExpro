import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase"; // Import googleAuthProvider
import { NavLink, useNavigate } from "react-router-dom";
import "./accounts.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null); // Add a state for error messages

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign-in successful");
        console.log("Username:", username);
        navigate("/home");
      })
      .catch((error) => {
        setError(error.message); // Set the error message
      });
  };

  const onGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const user = result.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message); // Set the error message
      });
  };

  const onSignupBtnClick = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="bady">
        <div>
          <div className="box-form">
            <div className="left">
              <div className="overlay">
                <h1>AmExpro</h1>
                <p
                  style={{
                    textAlign: "center",
                    textTransform: "upperCase",
                    fontSize: "1.8rem",
                  }}
                >
                  Login to your account to start shopping!
                </p>
                <span>
                  <a href="#" onClick={onGoogleSignIn}>
                    Login with Google
                  </a>
                  <a href="#" onClick={onSignupBtnClick}>
                    Create an Account
                  </a>
                </span>
              </div>
            </div>
            <div className="right">
              <h5>Login</h5>
              <p>
                Forgot Password? Reset it{" "}
                <NavLink to="/forgot-password">here</NavLink>
              </p>
              <div className="inputs">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {error && <p className="error-message">{error}</p>}{" "}
                {/* Render error message if error is present */}
              </div>
              <br />
              <button onClick={onLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

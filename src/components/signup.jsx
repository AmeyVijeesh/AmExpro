import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import "./accounts.css";

import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null); // Add a state for error messages

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: username });

      navigate("/login");
    } catch (error) {
      setError(error.message); // Set the error message
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="bady">
      <div>
        <div className="box-form">
          <div className="left">
            <div className="overlay">
              <h1>AmExpro</h1>
              <p>Create an account to start shopping!</p>
            </div>
          </div>
          <div className="right">
            <h5>Sign Up</h5>
            <p>
              Already have an account?
              <NavLink to="/login"> Login</NavLink>
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
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}{" "}
              {/* Render error message if error is present */}
            </div>
            <br />
            <button onClick={onSubmit}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// ForgotPassword.js
import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./accounts.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  const onBackClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="bady">
        <div>
          <div className="box-form" style={{ height: "50%", width: "100%" }}>
            <div style={{ margin: "50px" }}>
              <h2 style={{ textAlign: "center" }}>Forgot Password?</h2>
              <p>Enter your email address to receive a password reset link.</p>

              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "25px",
                  fontSize: "16px",
                  border: "none",
                  outline: "none",
                  borderBottom: "2px solid #b0b3b9",
                }}
              />
              <p
                style={{
                  textAlign: "right",
                  fontSize: "0.9rem",
                }}
              >
                <a
                  href="#"
                  onClick={onBackClick}
                  style={{ color: "grey", fontSize: "12px" }}
                >
                  Back
                </a>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button className="submitButton" onClick={handlePasswordReset}>
                  Reset Password
                </button>
              </div>
              <p style={{ textAlign: "center" }}>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

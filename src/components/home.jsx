import { collection, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import img from "./images/bannerimage.png";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState("User");

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName || "User");
      } else {
        setDisplayName("User");
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const bannerDisplay = () => {
    if (displayName === "User") {
      return "Hey there! Login to start shopping.";
    } else {
      return `Hey ${displayName}! Browse to start shopping.`;
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="banner">
          <h3 className="banner-header">{bannerDisplay()}</h3>
          <button className="banner-button">Get Started</button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;

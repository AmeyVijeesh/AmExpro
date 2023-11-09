import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import img from "./images/bannerimage.png";
import "./home.css";
import items from "./itemsData"; // Import the items data

const Home = () => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [displayedItems2, setDisplayedItems2] = useState([]);
  const [displayName, setDisplayName] = useState("User");

  const auth = getAuth();
  const [currentCard, setCurrentCard] = useState(0);

  const itemIdsToDisplay = [8, 2, 1, 6, 13, 19, 21, 25];
  const itemIdsToDisplay2 = [9, 4, 18, 16, 24, 7, 13, 20];

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName || "User");
      } else {
        setDisplayName("User");
      }
    });

    const startIndex = Math.floor(
      Math.random() * (itemIdsToDisplay.length - 4)
    );
    const initialItems = itemIdsToDisplay.slice(startIndex, startIndex + 4);

    setDisplayedItems(items.filter((item) => initialItems.includes(item.id)));

    const startIndex2 = Math.floor(
      Math.random() * (itemIdsToDisplay2.length - 4)
    );
    const initialItems2 = itemIdsToDisplay2.slice(startIndex2, startIndex2 + 4);

    setDisplayedItems2(items.filter((item) => initialItems2.includes(item.id)));

    return () => {
      unsubscribeAuth();
    };
  }, [auth]);

  const bannerDisplay = () => {
    if (displayName === "User") {
      return "Hey there! Login to start shopping.";
    } else {
      return `Hey ${displayName}! Browse to start shopping.`;
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === "next") {
      setCurrentCard((prevCard) =>
        prevCard === itemIdsToDisplay.length - 4 ? 0 : prevCard + 1
      );
    } else {
      setCurrentCard((prevCard) =>
        prevCard === 0 ? itemIdsToDisplay.length - 4 : prevCard - 1
      );
    }

    const startIndex = currentCard;
    const newItems = itemIdsToDisplay.slice(startIndex, startIndex + 4);

    setDisplayedItems(items.filter((item) => newItems.includes(item.id)));
  };

  const handleArrowClick2 = (direction) => {
    if (direction === "next") {
      setCurrentCard((prevCard) =>
        prevCard === itemIdsToDisplay2.length - 4 ? 0 : prevCard + 1
      );
    } else {
      setCurrentCard((prevCard) =>
        prevCard === 0 ? itemIdsToDisplay2.length - 4 : prevCard - 1
      );
    }

    const startIndex = currentCard;
    const newItems = itemIdsToDisplay2.slice(startIndex, startIndex + 4);

    setDisplayedItems2(items.filter((item) => newItems.includes(item.id)));
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="banner">
            <h3 className="banner-header">{bannerDisplay()}</h3>
            <button className="banner-button">Get Started</button>
          </div>
        </div>
        <div>
          <h3 className="listHeader">New Arrivals</h3>
          {isMobile && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => handleArrowClick("next")}
                className="moveBtn2"
              >{`Next`}</button>
              <button
                onClick={() => handleArrowClick("prev")}
                className="moveBtn2"
              >{`Previous`}</button>
            </div>
          )}
          <div className="product-container">
            <div className="product-cards-container">
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => handleArrowClick("prev")}
                    className="moveBtn2"
                  >{`<`}</button>
                </div>
              )}
              {displayedItems.map((item) => (
                <div key={item.id} className="product-card1">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="product-card-img1"
                  />
                  <h4>{item.name}</h4>{" "}
                  <p className="product-card-price1">${item.price}</p>
                  <span style={{ textAlign: "center" }}>
                    <NavLink to={`/item/${item.id}`} state={{ items }}>
                      View
                    </NavLink>
                  </span>
                </div>
              ))}
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => handleArrowClick("next")}
                    className="moveBtn2"
                  >{`>`}</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <h3 className="listHeader">Best Deals</h3>
          {isMobile && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => handleArrowClick2("next")}
                className="moveBtn2"
              >{`Next`}</button>
              <button
                onClick={() => handleArrowClick2("prev")}
                className="moveBtn2"
              >{`Previous`}</button>
            </div>
          )}
          <div className="product-container">
            <div className="product-cards-container">
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => handleArrowClick2("prev")}
                    className="moveBtn2"
                  >{`<`}</button>
                </div>
              )}
              {displayedItems2.map((item) => (
                <div key={item.id} className="product-card1">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="product-card-img1"
                  />
                  <h4>{item.name}</h4>
                  <p className="product-card-price1">${item.price}</p>

                  <span style={{ textAlign: "center" }}>
                    <NavLink to={`/item/${item.id}`} state={{ items }}>
                      View
                    </NavLink>
                  </span>
                </div>
              ))}
              {!isMobile && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => handleArrowClick2("next")}
                    className="moveBtn2"
                  >{`>`}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

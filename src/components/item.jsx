import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./item.css";

const ItemDetail = ({ addToCart, user }) => {
  const [open, setOpen] = React.useState(false);
  const [itemName, setItemName] = React.useState();
  const navigate = useNavigate();
  const { state } = useLocation();
  const items = state && state.items;
  let { id } = useParams();
  const item = items && items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found.</div>;
  }

  const handleSnackBarCall = (item) => {
    setOpen(true);
    setItemName(item);
  };

  const backBtnClick = () => {
    navigate("/items");
  };

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to continue.");
      navigate("/login");
    } else {
      addToCart(item);
      handleSnackBarCall(item.name);
    }
  };

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <button className="backBtn" onClick={backBtnClick}>
        &laquo; Back
      </button>
      <div className="container">
        <div className="left-column image-zoom-pan">
          <img
            data-image="black"
            src={item.imageUrl}
            alt=""
            style={{ marginTop: "20%" }}
          />
        </div>

        <div className="right-column">
          <div className="product-description">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ textAlign: "center" }}>{item.category}</span>
            </div>
            <h1 style={{ textAlign: "center" }}>{item.name}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "normal",
                  textAlign: "center",
                  backgroundColor: "black",
                  borderRadius: "6px",
                  width: "55px",
                  color: "#fff",
                }}
              >
                {item.rating} <span style={{ color: "#ffffff" }}>&#9733;</span>
              </p>
              <p
                style={{
                  margin: "20px",
                  fontWeight: "400",
                  fontFamily: "Roboto",
                  color: "#000000",
                }}
              >
                14500 Ratings & Reviews
              </p>
            </div>

            <p>{item.description}</p>
          </div>
          <div
            className="product-price"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>${item.price}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          onClose={handleSnackBarClose}
          style={{
            fontSize: "1.5rem",
            backgroundColor: "black",
            color: "#fff",
          }}
          icon={false}
        >
          Added {itemName} to your cart!
        </MuiAlert>
      </Snackbar>
      {/*TODO: add remove from cart*/}
    </div>
  );
};

export default ItemDetail;

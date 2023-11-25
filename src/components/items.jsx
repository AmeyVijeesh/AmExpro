import React, { useState } from "react";
import "./items.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import items from "./itemsData.js";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Items = ({ cart, addToCart, user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [itemName, setItemName] = useState("");
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState(items);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSnackBarCall = (item) => {
    setOpen(true);
    setItemName(item);
  };
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleAddToCart = (item) => {
    if (!user) {
      console.log("User is not logged in. Redirecting to login.");
      alert("Please login to continue.");
      console.log("User:", user);

      navigate("/login");
    } else {
      console.log("User is logged in. Adding to cart.");
      console.log("User:", user);

      addToCart(item);
      handleSnackBarCall(item.name);
    }
  };

  const handleSearch = (query) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  {/* TODO: Add this implementation */}
  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    addToCart(updatedCart);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  const handleSortChange = (sortOption) => {
    setSelectedSortOption(sortOption);
    sortItems(sortOption);
  };

  const sortItems = (sortOption) => {
    const sortedItems = [...filteredItems];

    if (sortOption === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price-low-to-high") {
      sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === "price-high-to-low") {
      sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredItems(sortedItems);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = filteredItems.slice(startIndex, endIndex);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          className="search-bar"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
      <div className="filterSortSelectDiv">
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="filterSortSelectText">Filter</p>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="filterSortSelect"
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Books">Books</option>
            <option value="Toys & Games">Toys & Games</option>
            <option value="Home Appliances">Home Appliances</option>{" "}
            <option value="Home Items">Home Items/Decor</option>
            <option value="Travel & Fashion">Travel & Fashion</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
          </select>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="filterSortSelectText">Sort by: </p>
          <select
            value={selectedSortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="filterSortSelect"
          >
            <option>None</option>
            <option value="name">Name (A-Z)</option>
            <option value="price-low-to-high">Price (Low to High)</option>
            <option value="price-high-to-low">Price (High to Low)</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {itemsToDisplay.length === 0 ? (
            <p>No items match</p>
          ) : (
            itemsToDisplay.map((item) => (
              <div key={item.id} className="col-md-4">
                <div className="product-card">
                  <div className="fillerText"></div>
                  <div className="product-tumb">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{
                        maxHeight: "300px",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  </div>
                  <div className="product-details">
                    <span className="product-catagory">{item.category}</span>
                    <h4>
                      <a href="#">{item.name}</a>
                    </h4>{" "}
                    <p>
                      <Link to={`/item/${item.id}`} state={{ items }}>
                        View
                      </Link>
                    </p>
                    <div className="product-bottom-details">
                      <div className="product-price">${item.price}</div>
                      <div className="product-links">
                        <button
                          onClick={() => {
                            handleAddToCart(item);
                            handleSnackBarCall(item.name);
                          }}
                          className="addToCartBtn"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <p className="paginationText">More items: </p>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
            id="paginationButton"
          >
            {index + 1}
          </button>
        ))}
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
    </div>
  );
};

export default Items;

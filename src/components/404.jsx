import React from "react";
import img from "./images/dog1.png";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        {/* Nice dog :) */}
        <img src={img} alt="" style={{ height: "200px", width: "200px" }} />
        <h3>
          Oops! Looks like you got lost. <NavLink>Go back home</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;

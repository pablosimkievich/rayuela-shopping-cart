import React from "react";
import { Filters } from "../Filters/Filters.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <div className="title-icon">
        <h1>
          Rayuela Shopping Cart
          <Link to="/cart">
            <CiShoppingCart className="icon" />
          </Link>
        </h1>
        <div className="red-box">0</div>
      </div>

      <Filters />
      <SearchBar />
    </div>
  );
};

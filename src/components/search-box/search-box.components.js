import React from "react";
import "./search-box.style.css";
const SearchBox = ({ onSearchChange, placeHolders }) => (
  <input
    className="search-box"
    type={"search"}
    placeholder={placeHolders}
    onChange={onSearchChange}
  />
);

export default SearchBox;

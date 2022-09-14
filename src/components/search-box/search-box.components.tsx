import React, { ChangeEvent } from "react";
import "./search-box.style.css";

type searchBoxProps = {
  placeHolders?: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ onSearchChange, placeHolders }: searchBoxProps) => (
  <input
    className="search-box"
    type={"search"}
    placeholder={placeHolders}
    onChange={onSearchChange}
  />
);

export default SearchBox;

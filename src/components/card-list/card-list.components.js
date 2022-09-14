import React from "react";
import Card from "../card/card.components";
import "./card-list.style.css";
const CardList = ({ monsters }) => {
  console.log(2);
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};
export default CardList;

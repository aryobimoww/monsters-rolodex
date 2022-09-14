import React from "react";
import Card from "../card/card.components";
import "./card-list.style.css";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};
const CardList = ({ monsters }: CardListProps) => {
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

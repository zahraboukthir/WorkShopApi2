import React from "react";
import ReceipCard from "./ReceipCard";

export const ReceipList = ({ Rlist }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        
      }}
    >
      {Rlist.map((el, i) => (
        <ReceipCard receip={el.recipe} key={i} />
      ))}
    </div>
  );
};

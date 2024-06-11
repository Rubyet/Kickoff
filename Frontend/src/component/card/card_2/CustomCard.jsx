import React from "react";
import style from "./card.module.css";

function CustomCard2(props) {
  console.log(props);
  return (
    <>
      <div className={`${style.card1} mt-2`}>
      <h2>CARD</h2>
      </div>
    </>
  );
}

export default CustomCard2;

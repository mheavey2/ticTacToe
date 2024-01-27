//import styles for squares
import styles from "./Square.module.css";
//import useState to allow component "remember" values
//import { useState } from "react";

//onSquareClick function allows the square to update the boards' state. The function is passed down from Board and called by square when its clicked
export default function Square({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

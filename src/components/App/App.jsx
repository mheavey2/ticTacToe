//import { useState } from "react";
import mainLogo from "../../images/ticTacToeIcon.png";
import styles from "./App.module.css";

import Board from "../Board/Board";

function App() {
  return (
    <>
      <div className={styles.mainContainer}>
        <img src={mainLogo} className={styles.icon} alt="Tic Tac Toe Icon" />
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    </>
  );
}

export default App;

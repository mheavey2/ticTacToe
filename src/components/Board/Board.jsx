//import square styles
import styles from "./Board.module.css";
import Square from "../Square/square";
import { useState } from "react";

//create a ticTacToe grid of 3x3 rows. each row has its own div
export default function Board() {
  //declare a state variable 'squares' that defaults to an array of 9 nulls corresponding to the boards 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));

  //function to update the squares array holding the boards state
  //takes the array index (square) as a parameter
  function handleClick(i) {
    //create copy of the squares array
    const nextSquares = squares.slice();
    //update new array to add 'X' to any square of board
    nextSquares[i] = "X";
    //let React know componenet state has changed
    setSquares(nextSquares);
  }

  return (
    <>
      <div className={styles.boardRow}>
        {/* pass the value prop from Board down to each square to associate it with an index in the squares array */}
        {/* connect onSquareClick prop to the handleClick function by creating a function that calls handleClick for each specific index (square)*/}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

//import square styles
import styles from "./Board.module.css";
import Square from "../Square/Square";

//create a ticTacToe grid of 3x3 rows. each row has its own div
export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    //first check if a square is already filled, so you don't override that value or if there are no more moves/game won
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //create copy of the squares array
    const nextSquares = squares.slice();
    if (xIsNext) {
      //update new array to add 'X' to any square of board
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  //let players know game is over
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "The Winner is: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className={styles.status}>{status}</div>

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

/*
function to determine when the game is won and there are no more turns to be made.
Takes an array of all the winning combinations, checks for a winner, returns 'X', 'O' or null.
*/
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

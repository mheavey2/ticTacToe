import Board from "../Board/Board";
import styles from "./Game.module.css";
import { useState } from "react";

//This component is used to display a list of past moves
export default function Game() {
  //keep track of when 'X' is to be played, with 'X' being the default first play
  const [xIsNext, setXIsNext] = useState(true);
  //declare a state variable 'history' that defaults to an array of 9 nulls corresponding to the boards 9 squares, to keep track of the game moves
  const [history, setHistory] = useState([Array(9).fill(null)]);

  //keep track of which step the user is currently viewing
  const [currentMove, setCurrentMove] = useState(0);
  //render current selected move , instead of always rendering the final move
  const currentSquares = history[currentMove];

  //function to update the game, called by the Board component
  function handlePlay(nextSquares) {
    //if you skip back a move, you only need to keep the history up to that point you don't nned to keep the move(s) you skipped back from. also need to update the currentMove to the most recent history entry
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  //function to jump to an alternate move
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    //set xIsNext to true if the new currentMOve is an even number
    setXIsNext(nextMove % 2 === 0);
  }

  //transform the moves history array to an array of buttons so you can "jump" to previous moves or return to start if there are no moves
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Return to Start";
    }
    return (
      <li key={move}>
        <button className={styles.moveButton} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameInfo}>
        <ul>{moves}</ul>
      </div>
    </div>
  );
}

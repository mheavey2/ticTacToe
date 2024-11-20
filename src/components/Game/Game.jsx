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
    if (nextMove >= 0) {
      setCurrentMove(nextMove);
      //set xIsNext to true if the new currentMOve is an even number
      setXIsNext(nextMove % 2 === 0);
    }
  }

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.gameInfo}>
        <button className={styles.moveButton} onClick={() => jumpTo(0)}>
          Return to Start
        </button>
        {/* if currentMove is greater than 0 display button else display nothing */}
        {currentMove > 0 ? (
          <button
            className={styles.moveButton}
            onClick={() => jumpTo(currentMove - 1)}
          >
            Go to previous Move
          </button>
        ) : null}
      </div>
    </div>
  );
}

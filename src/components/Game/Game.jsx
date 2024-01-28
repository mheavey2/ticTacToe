import Board from "../Board/Board";
import styles from "./Game.module.css";

//This component is used to display a list of past moves
export default function Game() {
  //keep track of when 'X' is to be played, with 'X' being the default first play
  const [xIsNext, setXIsNext] = useState(true);
  //declare a state variable 'history' that defaults to an array of 9 nulls corresponding to the boards 9 squares, to keep track of the game moves
  const [history, setHistory] = useState(Array(9).fill(null));
  //render the squares for the current move using the last squares array from the history
  const currentSquares = history[history.length - 1];

  //function to update the game, called by the Board component
  function handlePlay() {
    // TODO: add method
  }

  return (
    <>
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className={styles.classInfo}>{/*TODO: <ol>{}</ol> */}</div>
      </div>
    </>
  );
}

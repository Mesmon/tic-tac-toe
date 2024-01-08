import { makeMove } from "../api";
import { Player } from "../types/player";

type BoardProps = {
  board: string[][];
  player: Player;
};

const Board = ({ board, player }: BoardProps) => {
  const formatBoard = (board: string[][], player: Player) => {
    return (
      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                style={{
                  border: "1px solid white",
                  width: "90px",
                  height: "90px",
                  textAlign: "center",
                  fontSize: "60px",
                  cursor: "pointer",
                }}
                onClick={() => makeMove(rowIndex, colIndex, player)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  return formatBoard(board, player);
};

export default Board;

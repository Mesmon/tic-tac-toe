import { Player } from "../types/player";

const fetchGameState = async () => {
  const response = await fetch("http://localhost:4000/game");
  const gameState = await response.json();
  return gameState;
};

const makeMove = async (rowIndex: number, colIndex: number, player: Player) => {
  await fetch(
    `http://localhost:4000/game/makeMove?row=${rowIndex}&column=${colIndex}&player=${player}`,
    {
      method: "POST",
    }
  );
};

const resetGame = async () => {
  await fetch(`http://localhost:4000/game/reset`, {
    method: "POST",
  });
};

export { fetchGameState, makeMove, resetGame };

import React, { useEffect } from "react";
import { TicTacToe } from "../types/tic-tac-toe";
import ChoosePlayer from "./choose-player";
import { fetchGameState } from "../api";
import Board from "./board";
import { Player } from "../types/player";
import ResetButton from "./reset-button";

const GamePage = () => {
  const [gameState, setGameState] = React.useState<TicTacToe>();
  const [player, setPlayer] = React.useState<string>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const gameState = await fetchGameState();
      setGameState(gameState);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!gameState) {
    return <div>Loading...</div>;
  }
  if (gameState.winner) {
    return (
      <div>
        <h2>Winner: {gameState.winner}</h2>
        <ResetButton />
      </div>
    );
  }
  if (gameState.isGameOver) {
    return (
      <div>
        <h2>Draw!</h2>
        <ResetButton />
      </div>
    );
  }
  if (!player) {
    return <ChoosePlayer setPlayer={setPlayer} />;
  }
  return (
    <div>
      Player: {player}
      <Board board={gameState.board} player={player as Player} />
      <div>Current Player: {gameState.playerTurn}</div>
    </div>
  );
};

export default GamePage;

import { FastifyReply, FastifyRequest } from "fastify";
import { getGame } from "../game-manager.js";
import { isBoardFull, isWinner, makeMove, resetGame } from "../logic/tic-tac-toe.js";
import { MakeMoveRequest } from "../types/make-move-request.js";

const currentGame = getGame();

export const makeMoveController = (
  request: FastifyRequest<{ Querystring: MakeMoveRequest }>,
  reply: FastifyReply
) => {
  isBoardFull(currentGame);
  if (currentGame.isGameOver) {
    if (currentGame.winner) {
      reply.code(400);
      return { message: `Game is over! Player ${currentGame.winner} won!` };
    }
    reply.code(400);
    return { message: "Game is over! Draw!" };
  }
  const { row, column, player } = request.query;
  if (player !== currentGame.playerTurn) {
    reply.code(400);
    return { message: `It is not player ${player}'s turn!` };
  }
  const isMoveSuccessful = makeMove(currentGame, row, column, player);
  if (isMoveSuccessful) {
    const isPlayerWinner = isWinner(currentGame, player);
    if (isPlayerWinner) {
      currentGame.winner = player;
      currentGame.isGameOver = true;
      reply.code(200);
      return {
        message: `Move was successful. Player ${currentGame.winner} won!`,
      };
    }
    currentGame.playerTurn = player === "X" ? "O" : "X";
    return { message: "Move was successful." };
  } else {
    reply.code(400);
    return {
      message: "Move was not successful - there is already a player there!",
    };
  }
};

export const resetGameController = () => {
  resetGame(currentGame);
  return { message: "Game has been reset." };
};

export const getGameController = () => {
  return getGame();
};

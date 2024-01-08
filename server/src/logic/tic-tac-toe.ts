import { Player } from "../types/player.js";
import { TicTacToe } from "../types/tic-tac-toe.js";
import { winningStates } from "./winning-states.js";

export const createTicTacToe = (): TicTacToe => {
  return {
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    playerTurn: getRandomPlayer(),
    winner: null,
    isGameOver: false,
  };
};

const getRandomPlayer = (): Player => {
  return Math.random() > 0.5 ? "X" : "O";
};

export const resetGame = (game: TicTacToe) => {
  game.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  game.isGameOver = false;
  game.winner = null;
  game.playerTurn = getRandomPlayer();
};

/**
 * Make a move on the board. Returns true if the move was successful, false otherwise.
 *
 * @param game
 * @param row
 * @param column
 * @param player - either "X" or "O"
 * @returns
 */
export const makeMove = (
  game: TicTacToe,
  row: number,
  column: number,
  player: string
): boolean => {
  if (game.board[row][column] === "") {
    game.board[row][column] = player;
    return true;
  }
  return false;
};

export const isBoardFull = (game: TicTacToe): boolean => {
  for (let row = 0; row < game.board.length; row++) {
    for (let column = 0; column < game.board[row].length; column++) {
      if (game.board[row][column] === "") {
        return false;
      }
    }
  }
  game.isGameOver = true;
  return true;
};

export const isWinner = (game: TicTacToe, player: Player): boolean => {
  for (const state of winningStates) {
    let isWinner = true;
    for (const index of state) {
      const row = Math.floor(index / 3);
      const column = index % 3;
      if (game.board[row][column] !== player) {
        isWinner = false;
        break;
      }
    }
    if (isWinner) {
      return true;
    }
  }
  return false;
};

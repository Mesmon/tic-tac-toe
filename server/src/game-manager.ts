import { createTicTacToe } from "./logic/tic-tac-toe.js";
import { TicTacToe } from "./types/tic-tac-toe.js";

const ticTacToe: TicTacToe = createTicTacToe();

export const getGame = (): TicTacToe => {
    return ticTacToe;
}

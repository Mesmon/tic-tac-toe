import { Player } from "./player";

export type TicTacToe = {
    board: string[][];
    playerTurn: Player;
    winner: Player | null;
    isGameOver: boolean;
}
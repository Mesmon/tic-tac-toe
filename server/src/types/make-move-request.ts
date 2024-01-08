import { Player } from "./player";

export type MakeMoveRequest = {
    row: number;
    column: number;
    player: Player;
}
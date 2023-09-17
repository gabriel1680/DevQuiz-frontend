import { Player } from "../types/Player";

export interface PlayerGateway {
    getPlayer(id: number): Promise<Player>;
    createPlayer(username: string): Promise<Player>;
    changeUsername(player: Player): Promise<void>;
}
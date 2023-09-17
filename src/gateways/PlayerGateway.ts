import { Player } from "../types/Player";

export interface PlayerGateway {
  getPlayer(id: number): Promise<Player>;
  createPlayer(username: string): Promise<UsernameAlreadyTakenError | Player>;
  changeUsername(player: Player): Promise<UsernameAlreadyTakenError | void>;
}

export class UsernameAlreadyTakenError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

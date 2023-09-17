import { Player } from "../../types/Player";
import { PlayerGateway } from "../PlayerGateway";

export class InMemoryPlayerGateway implements PlayerGateway {
  private player: Player = { id: crypto.randomUUID(), username: "" };

  async getPlayer(id: string): Promise<Player> {
    console.log(id);
    return this.player;
  }

  async createPlayer(player: Player): Promise<void> {
    this.player = player;
  }

  async changeUsername(player: Player): Promise<void> {
    this.player = player;
  }
}

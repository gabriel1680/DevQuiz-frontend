import { Player } from "../../types/Player";
import { getUniqueId } from "../../utils/id";
import { PlayerGateway } from "../PlayerGateway";

export class InMemoryPlayerGateway implements PlayerGateway {
  private player: Player = { id: getUniqueId(), username: "" };

  async getPlayer(id: number): Promise<Player> {
    console.log(id);
    return this.player;
  }

  async createPlayer(username: string): Promise<Player> {
    this.player.username = username;
    return this.player;
  }

  async changeUsername(player: Player): Promise<void> {
    this.player = player;
  }
}

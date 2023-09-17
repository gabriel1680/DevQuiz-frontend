import { AxiosInstance } from "axios";

import { PlayerGateway } from "../PlayerGateway";
import { Player } from "../../types/Player";

export class AxiosPlayerGateway implements PlayerGateway {
  private readonly RESOURCE = "/players";

  constructor(private readonly api: AxiosInstance) {}

  async getPlayer(id: number): Promise<Player> {
    const { data } = await this.api.get(`${this.RESOURCE}/${id}`);
    return data;
  }

  async createPlayer(username: string): Promise<Player> {
    const { data } = await this.api.post(`${this.RESOURCE}`, { username });
    return data;
  }

  changeUsername(player: Player): Promise<void> {
    return this.api.patch(`${this.RESOURCE}/${player.id}`, {
      username: player.username,
    });
  }
}

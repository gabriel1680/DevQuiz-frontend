import axios, { AxiosError, AxiosInstance } from "axios";

import { PlayerGateway, UsernameAlreadyTakenError } from "../PlayerGateway";
import { Player } from "../../types/Player";

export class AxiosPlayerGateway implements PlayerGateway {
  private readonly RESOURCE = "/players";

  constructor(private readonly api: AxiosInstance) {}

  async getPlayer(id: number): Promise<Player> {
    const { data } = await this.api.get(`${this.RESOURCE}/${id}`);
    return data;
  }

  async createPlayer(
    username: string
  ): Promise<UsernameAlreadyTakenError | Player> {
    try {
      const { data } = await this.api.post(`${this.RESOURCE}`, { username });
      return data;
    } catch (error: unknown | AxiosError) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }
      if (error.response?.status === 400) {
        return new UsernameAlreadyTakenError(error.response.data.message);
      }
      throw error;
    }
  }

  async changeUsername(
    player: Player
  ): Promise<UsernameAlreadyTakenError | void> {
    try {
      await this.api.patch(`${this.RESOURCE}/${player.id}`, {
        username: player.username,
      });
    } catch (error: unknown | AxiosError) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }
      if (error.response?.status === 400) {
        return new UsernameAlreadyTakenError(error.response.data.message);
      }
      throw error;
    }
  }
}

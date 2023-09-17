import { Axios } from "axios";
import { PlayerGateway } from "../PlayerGateway";

export class AxiosPlayerGateway implements PlayerGateway {
  constructor(private readonly api: Axios) {}

  getUsername(): Promise<string> {
    return this.api.get("/player/username");
  }

  saveUsername(username: string): Promise<void> {
    return this.api.post("/player/username", { username });
  }

  changeUsername(username: string): Promise<void> {
    return this.api.patch("/player/username", { username });
  }
}

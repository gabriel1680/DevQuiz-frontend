import { PlayerGateway } from "../PlayerGateway";

export class InMemoryPlayerGateway implements PlayerGateway {
    private username = '';

    async getUsername(): Promise<string> {
        return this.username;
    }

    async saveUsername(username: string): Promise<void> {
        this.username = username;
    }

    async changeUsername(username: string): Promise<void> {
        this.username = username;
    }
}

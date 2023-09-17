export interface PlayerGateway {
    getUsername(): Promise<string>;
    saveUsername(username: string): Promise<void>;
    changeUsername(username: string): Promise<void>;
}
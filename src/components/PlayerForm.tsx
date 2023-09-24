import { useState } from "react";

import { Player } from "../types/Player";
import Button from "./Button";

export function PlayerForm({ player, onSubmit }: PlayerFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<Player>(player ?? createEmptyPlayer());

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    onSubmit(value).finally(() => setIsLoading(false));
  }

  function onChange(username: string) {
    setValue(prev => ({ ...prev, username }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>
          {player
            ? "Altere seu nome de usuário"
            : "Crie um nome de usuário para começar"}
        </h2>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="username"
            id="username"
            style={{
              margin: "16px 0",
              fontSize: "18px",
              padding: "8px",
              width: "100%",
            }}
            disabled={isLoading}
            value={value.username}
            onChange={e => onChange(e.target.value)}
            placeholder="Insira seu username"
          />
          <Button disabled={isLoading} loading={isLoading}>
            {player ? "Alterar" : "Iniciar"}
          </Button>
        </div>
      </div>
    </form>
  );

  function createEmptyPlayer() {
    return {
      id: 0,
      username: "",
    };
  }
}

type PlayerFormProps = {
  player?: Player;
  onSubmit: (player: Player) => Promise<void>;
};

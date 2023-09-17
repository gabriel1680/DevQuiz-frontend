import { useState } from "react";
import { Player } from "../types/Player";

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
      <h2>
        {player
          ? "Altere seu nome de usuário"
          : "Crie um nome de usuário para começar"}
      </h2>
      <input
        type="text"
        name="username"
        id="username"
        disabled={isLoading}
        value={value.username}
        onChange={e => onChange(e.target.value)}
        placeholder="Insira seu username"
      />
      <button type="submit" disabled={isLoading}>
        {player ? "Alterar" : "Iniciar"}
      </button>
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

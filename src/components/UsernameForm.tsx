import { useState } from "react";

export function UsernameForm({ username = "", onSubmit }: UsernameFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(username);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    onSubmit(value).finally(() => setIsLoading(false));
  }

  function onChange(newName: string) {
    setValue(newName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {username
          ? "Altere seu nome de usuário"
          : "Crie um nome de usuário para começar"}
      </h2>
      <input
        type="text"
        name="username"
        id="username"
        disabled={isLoading}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Insira seu username"
      />
      <button type="submit" disabled={isLoading}>
        {username ? "Alterar" : "Iniciar"}
      </button>
    </form>
  );
}

type UsernameFormProps = {
  username?: string;
  onSubmit: (username: string) => Promise<void>;
};

export function CreateUserForm() {
  return (
    <form>
      <h2>Crie um nome de usuário para começar</h2>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Insira seu username" />
      <button type="submit">Iniciar</button>
    </form>
  );
}

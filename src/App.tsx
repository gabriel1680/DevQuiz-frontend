import { RouterProvider } from "react-router";

import "./App.css";
import { PlayerContext } from "./context/PlayerContext";
import { router } from "./router";
import { CreateUserForm } from "./components/CreateUserForm";
import { useGetPlayerInfo } from "./hooks/useGetPlayerInfo";
import { ErrorContainer } from "./components/ErrorContainer";

function App() {
  const { username, error, isLoading } = useGetPlayerInfo();

  if (isLoading) {
    return "Buscando dados do jogador...";
  }

  return (
    <PlayerContext.Provider value={username}>
      {error && <ErrorContainer error={error} />}
      {!username ? <CreateUserForm /> : <RouterProvider router={router} />}
    </PlayerContext.Provider>
  );
}

export default App;

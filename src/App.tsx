import { RouterProvider } from "react-router";
import { useState } from "react";

import "./App.css";
import { ErrorContainer } from "./components/ErrorContainer";
import Modal from "./components/Modal";
import { PlayerForm } from "./components/PlayerForm";
import { PlayerContext } from "./context/PlayerContext";
import { useGetPlayerInfo } from "./hooks/useGetPlayerInfo";
import { usePlayerGateway } from "./hooks/context-hooks";
import { router } from "./router";
import { Player } from "./types/Player";

function App() {
  const [showChangeUsername, setShowChangeUsername] = useState(false);
  const [refetch, setRefetch] = useState(0);

  const playerGateway = usePlayerGateway();

  const { player, error, isLoading } = useGetPlayerInfo(refetch);

  async function onCreateUsername(playerData: Player) {
    try {
      const playerOrError = await playerGateway.createPlayer(playerData.username);
      if (playerOrError instanceof Error) {
        return alert(playerOrError.message);
      }
      localStorage.setItem("playerId", String(playerOrError.id));
      setRefetch(prev => (prev += 1));
    } catch (error) {
      console.log(error);
      alert("Parece que algo deu errado.");
      console.error(error);
    }
  }

  async function onChangeUsername(player: Player) {
    try {
      const error = await playerGateway.changeUsername(player);
      if (error instanceof Error) {
        return alert(error.message);
      }
      setRefetch(prev => (prev += 1));
      setShowChangeUsername(false);
    } catch (error) {
      alert("Parece que algo deu errado.");
      console.error(error);
    }
  }

  if (isLoading) {
    return "Buscando dados do jogador...";
  }

  return (
    <div className="main-container">
      {error && <ErrorContainer error={error} />}
      {showChangeUsername && (
        <Modal onClose={() => setShowChangeUsername(false)}>
          <PlayerForm onSubmit={onChangeUsername} player={player} />
        </Modal>
      )}
      {!player ? (
        <PlayerForm onSubmit={onCreateUsername} />
      ) : (
        <PlayerContext.Provider value={player}>
          <button onClick={() => setShowChangeUsername(true)}>
            Alterar nome de usuário
          </button>
          <RouterProvider router={router} />
        </PlayerContext.Provider>
      )}
    </div>
  );
}

export default App;

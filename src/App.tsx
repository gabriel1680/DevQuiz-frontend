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
      const player = await playerGateway.createPlayer(playerData.username);
      localStorage.setItem("playerId", String(player.id));
      setRefetch(prev => (prev += 1));
    } catch (error) {
      alert("Parece que algo deu errado.");
      console.error(error);
    }
  }

  async function onChangeUsername(player: Player) {
    try {
      await playerGateway.changeUsername(player);
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
    <>
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
    </>
  );
}

export default App;

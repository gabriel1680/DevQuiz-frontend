import { RouterProvider } from "react-router";
import { useState } from "react";

import "./App.css";
import { ErrorContainer } from "./components/ErrorContainer";
import Modal from "./components/Modal";
import { UsernameForm } from "./components/UsernameForm";
import { PlayerContext } from "./context/PlayerContext";
import { useGetPlayerInfo } from "./hooks/useGetPlayerInfo";
import { usePlayerGateway } from "./hooks/context-hooks";
import { router } from "./router";

function App() {
  const [showChangeUsername, setShowChangeUsername] = useState(false);
  const [refetch, setRefetch] = useState(0);

  const playerGateway = usePlayerGateway();

  const { username, error, isLoading } = useGetPlayerInfo(refetch);

  async function onCreateUsername(name: string) {
    try {
      await playerGateway.saveUsername(name);
      setRefetch(prev => (prev += 1));
    } catch (error) {
      alert("Parece que algo deu errado.");
      console.error(error);
    }
  }

  async function onChangeUsername(name: string) {
    try {
      await playerGateway.changeUsername(name);
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
    <PlayerContext.Provider value={username}>
      {error && <ErrorContainer error={error} />}
      {showChangeUsername && (
        <Modal onClose={() => setShowChangeUsername(false)}>
          <UsernameForm onSubmit={onChangeUsername} username={username} />
        </Modal>
      )}
      {!username ? (
        <UsernameForm onSubmit={onCreateUsername} />
      ) : (
        <>
          <button onClick={() => setShowChangeUsername(true)}>
            Alterar nome de usuário
          </button>
          <RouterProvider router={router} />
        </>
      )}
    </PlayerContext.Provider>
  );
}

export default App;

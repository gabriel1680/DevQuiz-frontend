import { useEffect, useState } from "react";

import { RouterProvider } from "react-router";
import "./App.css";
import { PlayerContext } from "./context/PlayerContext";
import { router } from "./router";
import { getUsername } from "./utils/api";
import { CreateUserForm } from "./components/CreateUserForm";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getUsername()
      .then(username => setUsername(username))
      .catch(error => alert(error.message));
  }, []);

  return (
    <PlayerContext.Provider value={username}>
      {!username ? <CreateUserForm /> : <RouterProvider router={router} />}
    </PlayerContext.Provider>
  );
}

export default App;

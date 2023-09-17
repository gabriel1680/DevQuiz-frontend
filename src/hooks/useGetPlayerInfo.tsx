import { useEffect, useState } from "react";

import { usePlayerGateway } from "./context-hooks";

export function useGetPlayerInfo(refetch: number) {
  const playerGateway = usePlayerGateway();
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    playerGateway
      .getUsername()
      .then(username => setUsername(username))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [refetch]);

  return { username, error, isLoading };
}

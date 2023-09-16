import { useEffect, useState } from "react";
import { getUsername } from "../utils/api";

export function useGetPlayerInfo() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsername()
      .then(username => setUsername(username))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { username, error, isLoading };
}

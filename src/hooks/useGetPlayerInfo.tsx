import { useEffect, useState } from "react";

import { usePlayerGateway } from "./context-hooks";
import { Player } from "../types/Player";

export function useGetPlayerInfo(refetch: number) {
  const playerId = getPlayerId();
  const playerGateway = usePlayerGateway();
  const [player, setPlayer] = useState<undefined | Player>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (playerId) {
      setIsLoading(true);
      playerGateway
        .getPlayer(playerId)
        .then(player => setPlayer(player))
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    }
  }, [playerGateway, playerId, refetch]);

  return { player, error, isLoading };
}

function getPlayerId(): number | undefined {
  const playerId = localStorage.getItem("playerId");
  if (!playerId) return undefined;
  return parseInt(playerId);
}

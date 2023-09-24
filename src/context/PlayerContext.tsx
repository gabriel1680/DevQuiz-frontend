import { createContext } from "react";

import { Player } from "../types/Player";

type PlayerContextType = {
  player: Player;
  openChangeUsernameModal: () => void;
};

export const PlayerContext = createContext<PlayerContextType>(
  {} as PlayerContextType
);

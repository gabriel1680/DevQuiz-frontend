import { useContext } from "react";

import { PlayerContext } from "../context/PlayerContext";

export default function usePlayerInfo() {
  return useContext(PlayerContext);
}

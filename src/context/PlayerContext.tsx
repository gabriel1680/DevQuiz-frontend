import { createContext } from "react";

import { Player } from "../types/Player";

export const PlayerContext = createContext<undefined | Player>(undefined);


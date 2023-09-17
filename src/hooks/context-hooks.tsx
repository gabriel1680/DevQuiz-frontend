import { useContext } from "react";

import { PlayerContext } from "../context/PlayerContext";
import { PlayerGateway } from "../gateways/PlayerGateway";
import {
  PlayerGatewayContext,
  QuizGatewayContext,
  RandomQuestionsGatewayContext,
} from "../context/GatewayContext";
import { QuizGateway } from "../gateways/QuizGateway";
import { RandomQuestionsGateway } from "../gateways/RandomQuestionsGateway";

export default function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('PlayerContext not provided');
  return ctx;
}

export function usePlayerGateway(): PlayerGateway {
  const ctx = useContext(PlayerGatewayContext);
  if (!ctx) throw new Error("PlayerGatewayContext not provided");
  return ctx;
}

export function useQuizGateway(): QuizGateway {
  const ctx = useContext(QuizGatewayContext);
  if (!ctx) throw new Error("QuizGatewayContext not provided");
  return ctx;
}

export function useRandomQuestionsGateway(): RandomQuestionsGateway {
  const ctx = useContext(RandomQuestionsGatewayContext);
  if (!ctx) throw new Error("RandomQuestionsGatewayContext not provided");
  return ctx;
}

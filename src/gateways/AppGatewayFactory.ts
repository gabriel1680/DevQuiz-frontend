import { oBackendApi, oQuestionsApi } from "../utils/api";
import { PlayerGateway } from "./PlayerGateway";
import { QuizGateway } from "./QuizGateway";
import { RandomQuestionsGateway } from "./RandomQuestionsGateway";
import { AxiosPlayerGateway } from "./axios/AxiosPlayerGateway";
import { AxiosQuizGateway } from "./axios/AxiosQuizGateway";
import { AxiosRandomQuestionsGateway } from "./axios/AxiosRandomQuestionsGateway";
import { InMemoryPlayerGateway } from "./memory/InMemoryPlayerGateway";
import { InMemoryQuizGateway } from "./memory/InMemoryQuizGateway";
import { InMemoryRandomQuestionsGateway } from "./memory/InMemoryRandomQuestionsGateway";

export class AppGatewayFactory {
  static create(type?: string): AppGatewayFactoryResponse {
    if (type === "memory") {
      return {
        playerGateway: new InMemoryPlayerGateway(),
        quizGateway: new InMemoryQuizGateway(),
        randomQuestionsGateway: new InMemoryRandomQuestionsGateway(),
      };
    }
    return {
      playerGateway: new AxiosPlayerGateway(oBackendApi),
      quizGateway: new AxiosQuizGateway(oBackendApi),
      randomQuestionsGateway: new AxiosRandomQuestionsGateway(oQuestionsApi),
    };
  }
}

type AppGatewayFactoryResponse = {
  playerGateway: PlayerGateway;
  quizGateway: QuizGateway;
  randomQuestionsGateway: RandomQuestionsGateway;
};

import { AxiosInstance } from "axios";

import { UserQuiz } from "../../types/Quiz";
import { QuizGateway } from "../QuizGateway";

export class AxiosQuizGateway implements QuizGateway {
  constructor(private readonly api: AxiosInstance) {}

  private getResource(playerId: number) {
    return `/players/${playerId}/quizzes`;
  }

  saveQuizScore(quiz: UserQuiz): Promise<void> {
    return this.api.post(this.getResource(quiz.playerId), quiz);
  }

  async getQuizAnswers(playerId: number): Promise<UserQuiz[]> {
    const { data } = await this.api.get<{ quizzes: UserQuizData[] }>(
      this.getResource(playerId)
    );
    return data.quizzes.map(quizData => ({
      ...quizData,
      playerId: quizData.player_id,
      answeredAt: new Date(quizData.answered_at),
    }));
  }

  removeQuizAnswer(playerId: number, quizId: number): Promise<void> {
    return this.api.delete(this.getResource(playerId) + "/" + quizId);
  }
}

type UserQuizData = {
  id: string;
  player_id: number;
  score: number;
  answered_at: string;
};

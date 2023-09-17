import { UserQuiz } from "../../types/Quiz";
import { QuizGateway } from "../QuizGateway";

export class InMemoryQuizGateway implements QuizGateway {
  private quizzes: UserQuiz[] = [];

  async saveQuizScore(quiz: UserQuiz): Promise<void> {
    this.quizzes.push(quiz);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getQuizAnswers(playerId: number): Promise<UserQuiz[]> {
    return this.quizzes;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removeQuizAnswer(playerId: number, quizId: number): Promise<void> {
    const quizIdx = this.quizzes.findIndex(q => q.id === quizId);
    this.quizzes.splice(quizIdx, 1);
  }
}

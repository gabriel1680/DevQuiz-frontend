import { Axios } from "axios";

import { UserQuiz } from "../../types/Quiz";
import { QuizGateway } from "../QuizGateway";

export class AxiosQuizGateway implements QuizGateway {
  constructor(private readonly api: Axios) {}

  saveQuizScore(quiz: UserQuiz): Promise<void> {
    return this.api.post("/quizzes", quiz);
  }

  getQuizAnswers(username: string): Promise<UserQuiz[]> {
    return this.api.get("/quizzes?username=" + username);
  }

  removeQuizAnswer(quizId: string): Promise<void> {
    return this.api.delete(`/quizzes/${quizId}`);
  }
}

import { AxiosInstance } from "axios";
import { v4 as uuid } from "uuid";

import { Question } from "../../types/Quiz";
import { RandomQuestionsGateway } from "../RandomQuestionsGateway";
import { randomQuestionsApiMock } from "../../utils/mock";

export class AxiosRandomQuestionsGateway implements RandomQuestionsGateway {
  constructor(private readonly api: AxiosInstance) {}

  private buildParams() {
    return "?amount=10&type=multiple";
  }

  async getRadomQuestions(): Promise<Question[]> {
    const { data } = await this.api.get<{
      response_code: number;
      results: typeof randomQuestionsApiMock;
    }>(this.buildParams());
    return data.results.map((question, idx) => {
      const questionId = uuid();
      return {
        id: questionId,
        ...question,
        text: question.question,
        index: idx + 1,
        answers: [...question.incorrect_answers, question.correct_answer]
          .map(answer => ({ id: uuid(), questionId, text: answer }))
          // shuffle
          .sort(() => 0.5 - Math.random()),
        correctAnswer: question.correct_answer,
      };
    });
  }
}

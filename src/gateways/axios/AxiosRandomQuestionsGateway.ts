import { AxiosInstance } from "axios";
import { v4 as uuid } from "uuid";

import { Question } from "../../types/Quiz";
import { RandomQuestionsGateway } from "../RandomQuestionsGateway";

export class AxiosRandomQuestionsGateway implements RandomQuestionsGateway {
  constructor(private readonly api: AxiosInstance) {}

  private buildParams() {
    return "?amount=2&category=9&difficulty=easy&type=multiple";
  }

  async getRadomQuestions(): Promise<Question[]> {
    const { data } = await this.api.get<{ response_code: number, results: any[] }>(this.buildParams());
    return data.results.map((question, idx) => {
      const questionId = uuid();
      return {
        id: questionId,
        ...question,
        text: question.question,
        index: idx + 1,
        answers: [...question.incorrect_answers, question.correct_answer].map(
          answer => ({ id: uuid(), questionId, text: answer })
        ),
        correctAnswer: question.correct_answer,
      };
    });
  }
}

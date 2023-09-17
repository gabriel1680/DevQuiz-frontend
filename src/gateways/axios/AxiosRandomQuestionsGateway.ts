import { AxiosInstance } from "axios";
import { v4 as uuid } from "uuid";

import { Question } from "../../types/Quiz";
import { randomQuestionsApiMock } from "../../utils/mock";
import { RandomQuestionsGateway } from "../RandomQuestionsGateway";

export class AxiosRandomQuestionsGateway implements RandomQuestionsGateway {
  constructor(private readonly api: AxiosInstance) {}

  async getRadomQuestions(): Promise<Question[]> {
    const { data } = await this.api.get<typeof randomQuestionsApiMock>("");
    return data.map((question, idx) => {
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

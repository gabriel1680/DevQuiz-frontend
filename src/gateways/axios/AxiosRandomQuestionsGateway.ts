import { v4 as uuid } from "uuid";
import { Axios } from "axios";

import { Question } from "../../types/Quiz";
import { RandomQuestionsGateway } from "../RandomQuestionsGateway";
import { randomQuestionsApiMock } from "../../utils/mock";

export class InMemoryRandomQuestionsGateway implements RandomQuestionsGateway {
  constructor(private readonly api: Axios) {}

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

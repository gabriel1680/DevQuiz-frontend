import { v4 as uuid } from "uuid";

import { Question } from "../../types/Quiz";
import { randomQuestionsApiMock } from "../../utils/mock";
import { RandomQuestionsGateway } from "../RandomQuestionsGateway";

export class InMemoryRandomQuestionsGateway implements RandomQuestionsGateway {
  async getRadomQuestions(): Promise<Question[]> {
    return randomQuestionsApiMock.map((question, idx) => {
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

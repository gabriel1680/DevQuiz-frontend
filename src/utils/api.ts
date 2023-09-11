import { v4 as uuid } from "uuid";

import { mock } from "./mock";
import { Question } from "../types/Quiz";

export async function getUsername() {
  return "gabriel";
}

export async function getQuestions(): Promise<Question[]> {
  return mock.map((question, idx) => {
    const questionId = uuid();
    return {
      id: uuid(),
      ...question,
      text: question.question,
      index: idx + 1,
      answers: [...question.incorrect_answers, question.correct_answer].map((answer) => ({ id: uuid(), questionId, text: answer })),
    }
  });
}

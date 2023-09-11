import { v4 as uuid } from "uuid";

import { mock } from "./mock";
import { Question } from "../components/Quiz";

export async function getUsername() {
  return "gabriel";
}

export async function getQuestions(): Promise<Question[]> {
  return mock.map(question => ({
    id: uuid(),
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer],
  }));
}

import { v4 as uuid } from "uuid";
import { mock } from "./mock";

export async function getUsername() {
  return "gabriel";
}
export async function getQuestions() {
  return mock.map(question => ({
    id: uuid(),
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer],
  }));
}

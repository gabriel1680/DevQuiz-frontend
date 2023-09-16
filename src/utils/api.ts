import { v4 as uuid } from "uuid";

import { mock } from "./mock";
import { Question, UserQuiz } from "../types/Quiz";

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple 
export const API_URL =  import.meta.env.VITE_QUIZ_API_URL || "https://opentdb.com/api.php";
export const BACKEND_URL =  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export async function getUsername() {
  return "Gabriel";
}

export async function getQuestions(): Promise<Question[]> {
  return mock.map((question, idx) => {
    const questionId = uuid();
    return {
      id: questionId,
      ...question,
      text: question.question,
      index: idx + 1,
      answers: [...question.incorrect_answers, question.correct_answer].map((answer) => ({ id: uuid(), questionId, text: answer })),
      correctAnswer: question.correct_answer,
    }
  });
}

export async function getUserQuizzes(username: string): Promise<UserQuiz[]> {
  console.log(username);
  return [
    {
      id: uuid(), 
      answeredAt: new Date('2022-08-16'),
      score: 2,
    },
    {
      id: uuid(), 
      answeredAt: new Date('2022-08-16'),
      score: 4,
    }
  ];
}
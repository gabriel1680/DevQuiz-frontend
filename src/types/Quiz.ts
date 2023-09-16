export type Answer = {
  id: string;
  questionId: string;
  text: string;
};

export type Question = {
  id: string;
  index: number;
  text: string;
  answers: Answer[];
  correctAnswer: string;
};

export type UserQuiz = {
  id: string;
  score: number;
  answeredAt: Date;
}
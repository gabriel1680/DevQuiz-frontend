import { UserQuiz } from "../types/Quiz";

export interface QuizGateway {
    saveQuizScore(quiz: UserQuiz): Promise<void>;
    getQuizAnswers(username: string): Promise<UserQuiz[]>;
    removeQuizAnswer(quizId: string): Promise<void>;
}
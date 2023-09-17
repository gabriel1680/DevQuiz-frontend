import { UserQuiz } from "../types/Quiz";

export interface QuizGateway {
    saveQuizScore(quiz: UserQuiz): Promise<void>;
    getQuizAnswers(playerId: number): Promise<UserQuiz[]>;
    removeQuizAnswer(playerId: number, quizId: number): Promise<void>;
}
import { UserQuiz } from "../../types/Quiz";
import { playerQuizzesMock } from "../../utils/mock";
import { QuizGateway } from "../QuizGateway";

export class InMemoryQuizGateway implements QuizGateway {
    private quizzes: UserQuiz[] = playerQuizzesMock;

    async saveQuizScore(quiz: UserQuiz): Promise<void> {
        this.quizzes.push(quiz);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getQuizAnswers(username: string): Promise<UserQuiz[]> {
        return this.quizzes;
    }

    async removeQuizAnswer(quizId: string): Promise<void> {
        const quizIdx = this.quizzes.findIndex(q => q.id === quizId);
        this.quizzes.splice(quizIdx, 1)
    }
}

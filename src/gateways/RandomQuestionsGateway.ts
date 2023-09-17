import { Question } from "../types/Quiz";

export interface RandomQuestionsGateway {
    getRadomQuestions(): Promise<Question[]>;
}


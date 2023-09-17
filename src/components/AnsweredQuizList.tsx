import { PlayerQuizCard } from "./PlayerQuizCard";
import { UserQuiz } from "../types/Quiz";

export function AnsweredQuizList({
  quizzes,
  onRemoveQuiz,
}: AnsweredQuizListProps) {
  if (quizzes.length === 0) {
    return <div>Você não tem nenhum envio.</div>;
  }

  return (
    <ul>
      {quizzes.map(quiz => (
        <PlayerQuizCard key={quiz.id} quiz={quiz} onRemoveQuiz={onRemoveQuiz} />
      ))}
    </ul>
  );
}

type AnsweredQuizListProps = {
  quizzes: UserQuiz[];
  onRemoveQuiz: (quiz: UserQuiz) => void | Promise<void>;
};

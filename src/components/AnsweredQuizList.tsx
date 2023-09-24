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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
      {quizzes.map(quiz => (
        <PlayerQuizCard key={quiz.id} quiz={quiz} onRemoveQuiz={onRemoveQuiz} />
      ))}
    </div>
  );
}

type AnsweredQuizListProps = {
  quizzes: UserQuiz[];
  onRemoveQuiz: (quiz: UserQuiz) => void | Promise<void>;
};

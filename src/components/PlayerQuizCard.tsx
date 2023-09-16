import Icon from "./Icon";
import { UserQuiz } from "../types/Quiz";

export function PlayerQuizCard({ quiz, onRemoveQuiz }: PlayerQuizCardProps) {
  return (
    <div>
      <div>Data de envio: {new Date(quiz.answeredAt).toLocaleDateString()}</div>
      <div>Pontuação: {quiz.score}</div>
      <Icon icon="delete" onClick={() => onRemoveQuiz(quiz)} />
    </div>
  );
}

type PlayerQuizCardProps = {
  quiz: UserQuiz;
  onRemoveQuiz: (quiz: UserQuiz) => void;
};

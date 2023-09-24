import Icon from "./Icon";
import { UserQuiz } from "../types/Quiz";

export function PlayerQuizCard({ quiz, onRemoveQuiz }: PlayerQuizCardProps) {
  return (
    <div
      style={{
        padding: "16px",
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        borderRadius: "4px",
        position: "relative",
        fontSize: '0.9rem'
      }}
    >
      <div>Data de envio: {new Date(quiz.answeredAt).toLocaleDateString()}</div>
      <div>Pontuação: {quiz.score}</div>
      <Icon
        icon="delete"
        style={{ color: "red", position: "absolute", right: 5, bottom: 5 }}
        onClick={() => onRemoveQuiz(quiz)}
      />
    </div>
  );
}

type PlayerQuizCardProps = {
  quiz: UserQuiz;
  onRemoveQuiz: (quiz: UserQuiz) => void;
};

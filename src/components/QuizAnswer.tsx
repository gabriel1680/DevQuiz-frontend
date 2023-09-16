import { Answer } from "../types/Quiz";

export function QuizAnswer({ answer, handleAnswer }: QuizAnswerProps) {
  return (
    <div>
      <input
        type="radio"
        name={`Q[${answer.questionId}]`}
        value={answer.text}
        onChange={() => handleAnswer(answer)}
      />
      <label htmlFor={`Q[${answer.questionId}]`}>{answer.text}</label>
    </div>
  );
}

type QuizAnswerProps = {
  answer: Answer;
  handleAnswer: (answer: Answer) => void;
};

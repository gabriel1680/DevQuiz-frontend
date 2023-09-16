import { Answer, Question } from "../types/Quiz";
import { QuizAnswer } from "./QuizAnswer";

export function QuizQuestion({
  question,
  handleAnswer,
}: QuizQuestionProps) {
  return (
    <div>
      <h2>Questão {question.index}</h2>
      <h4>{question.text}</h4>
      {question.answers.map((answer) => (
        <QuizAnswer
          key={answer.id}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      ))}
    </div>
  );
}

type QuizQuestionProps = {
  question: Question;
  handleAnswer: (answer: Answer) => void;
};

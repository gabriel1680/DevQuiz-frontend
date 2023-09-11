import { memo, useMemo } from "react";

import { Question } from "../types/Quiz";
import { QuizAnswer } from "./QuizAnswer";

const MemoizedQuizAnswers = memo(QuizAnswer);

export function QuizQuestion({ question, handleAnswer }: QuizQuestionProps) {
  const memoizedAnswers = useMemo(
    () =>
      question.answers.map((answer, answerId) => (
        <MemoizedQuizAnswers
          key={answerId}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      )),
    [question.answers]
  );

  return (
    <div>
      <h2>Questão {question.index}</h2>
      <h4>{question.text}</h4>
      {memoizedAnswers}
    </div>
  );
}

type QuizQuestionProps = {
  question: Question;
  handleAnswer: () => void;
};

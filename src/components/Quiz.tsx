import { memo, useMemo, useState } from "react";

import { QuizQuestion } from "./QuizQuestion";
import { Question } from "../types/Quiz";

const MemoizedQuizQuestion = memo(QuizQuestion);

export function Quiz({ questions }: QuizProps) {
  const [step, setStep] = useState(0);
  const [haveAnsweredCurrentStep, setHaveAnsweredCurrentStep] = useState(false);

  function handleAnswer() {
    setHaveAnsweredCurrentStep(true);
  }

  function handleNextStep() {
    setStep(prevStep => (prevStep += 1));
    setHaveAnsweredCurrentStep(false);
  }

  const memoizedQuizQuestions = useMemo(() => {
    return questions.map((question, idx) => (
      <MemoizedQuizQuestion
        key={idx}
        question={{ ...question }}
        handleAnswer={handleAnswer}
      />
    ));
  }, [questions]);

  const isLastStep = (questions.length - 1) === step;

  return (
    <div>
      {memoizedQuizQuestions[step]}
      <button onClick={handleNextStep} disabled={!haveAnsweredCurrentStep}>
        {isLastStep ? "Finalizar" : "Próximo"}
      </button>
    </div>
  );
}

type QuizProps = {
  questions: Question[];
};

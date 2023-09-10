import { memo, useMemo, useState } from "react";
import { QuizQuestion } from "./QuizQuestion";

const MemoizedQuizQuestion = memo(QuizQuestion);
export function Quiz({ questions }) {
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
        question={{ ...question, index: step + idx + 1 }}
        handleAnswer={handleAnswer} />
    ));
  }, [questions]);

  const lastStep = questions.length - 1;

  return (
    <div>
      {memoizedQuizQuestions[step]}
      <button onClick={handleNextStep} disabled={!haveAnsweredCurrentStep}>
        {lastStep !== step ? "Próximo" : "Finalizar"}
      </button>
    </div>
  );
}

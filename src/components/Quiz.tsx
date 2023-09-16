import { useState } from "react";

import { Answer, Question } from "../types/Quiz";
import { QuizQuestion } from "./QuizQuestion";

export function Quiz({ questions, onGameOver }: QuizProps) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [haveAnsweredCurrentStep, setHaveAnsweredCurrentStep] = useState(false);
  const [answers, setAnswers] = useState<Map<string, Answer>>(new Map());

  const currentQuestion = questions[step];

  function handleAnswer(answer: Answer) {
    setAnswers(prevState => prevState.set(answer.questionId, answer));
    setHaveAnsweredCurrentStep(true);
  }

  function onNextStep() {
    if (
      currentQuestion.correctAnswer === answers.get(currentQuestion.id)?.text
    ) {
      setScore(score => (score += 1));
    }
    setStep(prevStep => (prevStep += 1));
    setHaveAnsweredCurrentStep(false);
  }

  return (
    <div>
      <>
        <QuizQuestion question={currentQuestion} handleAnswer={handleAnswer} />
        <button
          onClick={onNextStep}
          disabled={!haveAnsweredCurrentStep}
        >
          {isLastStep() ? "Finalizar" : "Próximo"}
        </button>
      </>
    </div>
  );

  function isLastStep() {
    return questions.length - 1 === step;
  }

  function isGameOver() {
    return questions.length === step;
  }
}

type QuizProps = {
  questions: Question[];
  onGameOver: (answers: Answer[], score: number) => Promise<void>;
};

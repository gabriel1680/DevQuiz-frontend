import { useState } from "react";

import { Answer, Question } from "../types/Quiz";
import { QuizQuestion } from "./QuizQuestion";
import Button from "./Button";

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
    if (isCorrectAnswer()) {
      setScore(score => (score += 1));
    }
    setStep(prevStep => (prevStep += 1));
    setHaveAnsweredCurrentStep(false);
  }

  function onLastStep() {
    let finalScore = score;
    if (isCorrectAnswer()) {
      finalScore++;
    }
    onGameOver(finalScore);
    reset();
  }

  function reset() {
    setStep(0);
    setScore(0);
    setAnswers(new Map());
    setHaveAnsweredCurrentStep(false);
  }

  if (isQuestionsEmpty()) {
    return <p>Nenhuma questão foi encontrada )=</p>;
  }

  return (
    <div>
      <QuizQuestion question={currentQuestion} handleAnswer={handleAnswer} />
      <Button
        onClick={isLastStep() ? onLastStep : onNextStep}
        disabled={!haveAnsweredCurrentStep}
      >
        {isLastStep() ? "Finalizar" : "Próximo"}
      </Button>
    </div>
  );

  function isQuestionsEmpty() {
    return questions.length === 0;
  }

  function isLastStep() {
    return questions.length - 1 === step;
  }

  function isCorrectAnswer() {
    return (
      currentQuestion.correctAnswer === answers.get(currentQuestion.id)?.text
    );
  }
}

type QuizProps = {
  questions: Question[];
  onGameOver: (score: number) => Promise<void>;
};

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
    onGameOver(Array.from(answers.values()), finalScore);
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
      <button
        onClick={isLastStep() ? onLastStep : onNextStep}
        style={{
          padding: "8px",
          backgroundColor: "#EE4876",
          border: "none",
          borderRadius: "60px",
          width: "100%",
          color: "white",
          cursor: "pointer",
          margin: "24px 0",
          fontSize: "18px",
        }}
        disabled={!haveAnsweredCurrentStep}
      >
        {isLastStep() ? "Finalizar" : "Próximo"}
      </button>
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
  onGameOver: (answers: Answer[], score: number) => Promise<void>;
};

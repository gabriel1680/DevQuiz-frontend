import { useState } from "react";

import { ErrorContainer } from "../components/ErrorContainer";
import { Quiz } from "../components/Quiz";
import ScoreResult from "../components/ScoreResult";
import useGetRandomQuestions from "../hooks/useGetRandomQuestions";
import usePlayerInfo from "../hooks/usePlayerInfo";
import { Answer } from "../types/Quiz";

export default function QuizView() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [refetch, setRefetch] = useState(0);

  const username = usePlayerInfo();

  const { questions, error, isLoading } = useGetRandomQuestions(refetch);

  async function onGameOver(answers: Answer[], score: number) {
    // send to backend - quiz id + username + score
    setIsGameOver(true);
    setFinalScore(score);
  }

  async function onRetry(): Promise<void> {
    setIsGameOver(false);
    setFinalScore(0);
    setRefetch(prev => (prev += 1));
  }

  if (isLoading) {
    return "Carregando as questões...";
  }

  return (
    <>
      {error && <ErrorContainer error={error} />}
      {!isGameOver ? (
        <Quiz questions={questions} onGameOver={onGameOver} />
      ) : (
        <ScoreResult
          username={username}
          finalScore={finalScore}
          totalScore={getTotalScore()}
          onRetry={onRetry}
        />
      )}
    </>
  );

  function getTotalScore() {
    return questions.length;
  }
}

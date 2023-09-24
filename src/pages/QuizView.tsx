import { useState } from "react";
import { Link } from "react-router-dom";

import { ErrorContainer } from "../components/ErrorContainer";
import { Quiz } from "../components/Quiz";
import ScoreResult from "../components/ScoreResult";
import useGetRandomQuestions from "../hooks/useGetRandomQuestions";
import usePlayer, { useQuizGateway } from "../hooks/context-hooks";
import { getUniqueId } from "../utils/id";

export default function QuizView() {
  const quizGetaway = useQuizGateway();
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [refetch, setRefetch] = useState(0);

  const { player } = usePlayer();

  const { questions, error, isLoading } = useGetRandomQuestions(refetch);

  async function onGameOver(score: number) {
    try {
      await quizGetaway.saveQuizScore({
        id: getUniqueId(),
        playerId: player.id,
        score,
        answeredAt: new Date(),
      });
      setIsGameOver(true);
      setFinalScore(score);
    } catch (error) {
      console.error(error);
      alert("Parece que algo deu errado ao salvar os dados.");
    }
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
      <Link to="/">&larr; Voltar para home</Link>
      {error && <ErrorContainer error={error} />}
      {!isGameOver ? (
        <Quiz questions={questions} onGameOver={onGameOver} />
      ) : (
        <ScoreResult
          username={player.username}
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

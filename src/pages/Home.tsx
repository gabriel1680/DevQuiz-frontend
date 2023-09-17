import { useState } from "react";
import { Link } from "react-router-dom";

import { ErrorContainer } from "../components/ErrorContainer";
import { PlayerQuizCard } from "../components/PlayerQuizCard";
import useGetPlayerAnsweredQuizzes from "../hooks/useGetPlayerAnsweredQuizzes";
import usePlayerInfo, { useQuizGateway } from "../hooks/context-hooks";
import { UserQuiz } from "../types/Quiz";

export default function Home() {
  const username = usePlayerInfo();
  const quizGateway = useQuizGateway();

  const [refetch, setRefetch] = useState(0);

  const { quizzes, error, isLoading } = useGetPlayerAnsweredQuizzes(
    username,
    refetch
  );

  function onRemoveQuiz(quiz: UserQuiz) {
    setRefetch(prev => (prev += 1));
    quizGateway
      .removeQuizAnswer(quiz.id)
      .catch(() => alert("Houve um erro ao remover o quiz"));
  }

  if (isLoading) {
    return "Carregado seus desafios respondidos...";
  }

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      <h1>Home</h1>
      <div>Bem vindo(a) {username}</div>
      <Link to="/quiz">Inicie um novo quiz!</Link>
      <div>
        Pontos acumulados no último mês:{" "}
        {quizzes.reduce((score, quiz) => (score += quiz.score), 0)}
      </div>
      <div>Esses seus seus últimos envios:</div>
      <ul>
        {quizzes.map(quiz => (
          <PlayerQuizCard
            key={quiz.id}
            quiz={quiz}
            onRemoveQuiz={onRemoveQuiz}
          />
        ))}
      </ul>
    </main>
  );
}

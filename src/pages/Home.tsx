import { ErrorContainer } from "../components/ErrorContainer";
import useGetPlayerAnsweredQuizzes from "../hooks/useGetPlayerAnsweredQuizzes";
import usePlayerInfo from "../hooks/usePlayerInfo";
import { UserQuiz } from "../types/Quiz";
import { removePlayerQuiz } from "../utils/api";
import { PlayerQuizCard } from "../components/PlayerQuizCard";
import { useState } from "react";

export default function Home() {
  const username = usePlayerInfo();
  const [refetch, setRefetch] = useState(0);

  const { quizzes, error, isLoading } = useGetPlayerAnsweredQuizzes(
    username,
    refetch
  );

  function onRemoveQuiz(quiz: UserQuiz) {
    setRefetch(prev => (prev += 1));
    removePlayerQuiz(username, quiz.id).catch(() =>
      alert("Houve um erro ao remover o quiz")
    );
  }

  if (isLoading) {
    return "Carregado seus desafios respondidos...";
  }

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      <h1>Home</h1>
      <div>Bem vindo(a) {username}</div>
      <a href="/quiz">Inicie um novo quiz!</a>
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

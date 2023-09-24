import { useState } from "react";
import { Link } from "react-router-dom";

import { ErrorContainer } from "../components/ErrorContainer";
import useGetPlayerAnsweredQuizzes from "../hooks/useGetPlayerAnsweredQuizzes";
import usePlayer, { useQuizGateway } from "../hooks/context-hooks";
import { UserQuiz } from "../types/Quiz";
import { AnsweredQuizList } from "../components/AnsweredQuizList";
import Icon from "../components/Icon";

export default function Home() {
  const { player, openChangeUsernameModal } = usePlayer();
  const quizGateway = useQuizGateway();

  const [refetch, setRefetch] = useState(0);

  const { quizzes, error, isLoading } = useGetPlayerAnsweredQuizzes(
    player.id,
    refetch
  );

  function onRemoveQuiz(quiz: UserQuiz) {
    quizGateway
      .removeQuizAnswer(player.id, quiz.id)
      .then(() => setRefetch(prev => (prev += 1)))
      .catch(() => alert("Houve um erro ao remover o quiz"));
  }

  if (isLoading) {
    return "Carregado seus desafios respondidos...";
  }

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      <h1 style={{ marginTop: 0 }}>Home</h1>
      <div style={{ marginBottom: "16px" }}>
        Bem vindo(a) de volta, <b>{player.username.toLocaleUpperCase()}</b>
        <Icon
          icon="edit"
          style={{ color: "#8A58C5" }}
          onClick={openChangeUsernameModal}
        />
      </div>
      <div>
        Pontos acumulados:{" "}
        <b style={{ color: "#8A58C5" }}>
          {quizzes.reduce((score, quiz) => (score += quiz.score), 0)}
        </b>
      </div>
      <Link to="/quiz">
        <button
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
        >
          INICIAR QUIZ
        </button>
      </Link>
      <div style={{ padding: "16px", textAlign: "center" }}>
        Últimos envios:
      </div>
      <AnsweredQuizList quizzes={quizzes} onRemoveQuiz={onRemoveQuiz} />
    </main>
  );
}

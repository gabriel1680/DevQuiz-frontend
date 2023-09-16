import { ErrorContainer } from "../components/ErrorContainer";
import useGetPlayerAnsweredQuizzes from "../hooks/useGetPlayerAnsweredQuizzes";
import usePlayerInfo from "../hooks/usePlayerInfo";

export default function Home() {
  const username = usePlayerInfo();

  const { quizzes, error, isLoading } = useGetPlayerAnsweredQuizzes(username);

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
          <div key={quiz.id}>
            <div>
              Data de envio: {new Date(quiz.answeredAt).toLocaleDateString()}
            </div>
            <div>Pontuação: {quiz.score}</div>
          </div>
        ))}
      </ul>
    </main>
  );
}

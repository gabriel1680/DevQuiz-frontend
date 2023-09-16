import { useEffect, useState } from "react";

import "./App.css";
import { CreateUserForm } from "./components/CreateUserForm";
import { ErrorContainer } from "./components/ErrorContainer";
import { Quiz } from "./components/Quiz";
import Result from "./components/Result";
import { Answer, Question } from "./types/Quiz";
import { getQuestions, getUsername } from "./utils/api";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    getUsername()
      .then(username => setUsername(username))
      .catch(error => setError(error.message));

    getQuestions()
      .then(questions => setQuestions(questions))
      .catch(error => setError(error.message));
  }, []);

  async function onGameOver(answers: Answer[], score: number) {
    // send to backend - quiz id + username + score
    setIsGameOver(true);
    setFinalScore(score);
  }

  async function onRetry(): Promise<void> {
    setIsGameOver(false);
    setFinalScore(0);
  }

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      {!username ? (
        <CreateUserForm />
      ) : !isGameOver ? (
        <Quiz questions={questions} onGameOver={onGameOver} />
      ) : (
        <Result
          username={username}
          finalScore={finalScore}
          totalScore={getTotalScore()}
          onRetry={onRetry}
        />
      )}
    </main>
  );

  function getTotalScore() {
    return questions.length;
  }
}

export default App;

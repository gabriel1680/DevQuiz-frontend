import { useEffect, useState } from "react";

import "./App.css";
import { Quiz } from "./components/Quiz";
import { Answer, Question } from "./types/Quiz";
import { getUsername, getQuestions } from "./utils/api";
import { ErrorContainer } from "./components/ErrorContainer";
import { CreateUserForm } from "./components/CreateUserForm";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsername()
      .then(username => setUsername(username))
      .catch(error => setError(error.message));

    getQuestions()
      .then(questions => setQuestions(questions))
      .catch(error => setError(error.message));
  }, []);

  async function onGameOver(answers: Answer[], score: number) {
    console.log(answers, score);
  }

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      {!username ? (
        <CreateUserForm />
      ) : (
        <Quiz questions={questions} onGameOver={onGameOver} />
      )}
    </main>
  );
}

export default App;

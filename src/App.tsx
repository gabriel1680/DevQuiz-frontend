import { useEffect, useState } from "react";

import "./App.css";
import { Quiz } from "./components/Quiz";
import { Question } from "./types/Quiz";
import { getUsername, getQuestions } from "./utils/api";
import { ErrorContainer } from "./components/ErrorContainer";
import { CreateUsernameForm } from "./components/CreateUsernameForm";

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

  return (
    <main>
      {error && <ErrorContainer error={error} />}
      {!username ? (
        <CreateUsernameForm />
      ) : (
        <>
          <p>Respondendo como: {username.toLocaleUpperCase()}</p>
          <Quiz questions={questions} />
        </>
      )}
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { mock } from "./mock";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);
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
        <Quiz username={username} questions={questions} />
      )}
    </main>
  );
}

export default App;

/**
 * @param {{ error: string }} param0
 */
function ErrorContainer({ error }) {
  return (
    <div className="error-container">
      <h3>Parece que algo deu errado ao carregar os dados:</h3>
      <p>{error}</p>
    </div>
  );
}

async function getUsername() {
  return "gabriel";
}

async function getQuestions() {
  return mock.map(question => ({
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer],
  }));
}

function CreateUsernameForm() {
  return (
    <form>
      <h2>Crie um nome de usuário para começar</h2>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Insira seu username"
      />
      <button type="submit">Iniciar</button>
    </form>
  );
}

/**
 * @param {{username: string, questions: {difficulty: string, question: string, correct_answer: string, incorrect_answers: string[], answers: string[]}[]}} param0
 */
function Quiz({ username, questions }) {
  const [step, setStep] = useState(0);
  const [lastStep, setLastStep] = useState(questions.length - 1);
  const [answers, setAnswers] = useState([]);
  const [haveAnsweredCurrentStep, setHaveAnsweredCurrentStep] = useState(false);

  function handleAnswer() {
    setHaveAnsweredCurrentStep(true);
  }

  function handleNextStep() {
    setStep(prevStep => (prevStep += 1));
    setHaveAnsweredCurrentStep(false);
  }

  return (
    <div>
      <p>Respondendo como: {username.toLocaleUpperCase()}</p>
      <h2>Questão {step + 1}</h2>
      <h4>{questions[step].question}</h4>
      {questions[step].answers.map((answer, answerId) => {
        const questionId = uuid();
        return (
          <div key={answerId}>
            <input
              type="radio"
              name={`Q[${questionId}]`}
              value={answer}
              onChange={handleAnswer}
            />
            <label htmlFor={`Q[${step}]`}>{answer}</label>
          </div>
        );
      })}
      <button onClick={handleNextStep} disabled={!haveAnsweredCurrentStep}>
        {lastStep !== step ? "Próximo" : "Finalizar"}
      </button>
    </div>
  );
}

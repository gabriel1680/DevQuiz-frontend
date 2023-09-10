import { QuizAnswer } from "./QuizAnswer";

export function QuizQuestion({ question, handleAnswer }) {
  return (
    <div>
      <h2>Questão {question.index}</h2>
      <h4>{question.question}</h4>
      {question.answers.map((answer, answerId) => {
        return (
          <QuizAnswer
            questionId={question.id}
            key={answerId}
            answer={answer}
            handleAnswer={handleAnswer} />
        );
      })}
    </div>
  );
}

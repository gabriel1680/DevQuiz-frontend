import { Answer, Question } from "../types/Quiz";
import { DifficultyTag } from "./DifficultyTag";
import { QuizAnswer } from "./QuizAnswer";

export function QuizQuestion({ question, handleAnswer }: QuizQuestionProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Questão {question.index}</h2>
        <DifficultyTag difficulty={question.difficulty} />
      </div>
      <h4>{htmlDecode(question.text)}</h4>
      {question.answers.map(answer => (
        <QuizAnswer
          key={answer.id}
          answer={answer}
          handleAnswer={handleAnswer}
        />
      ))}
    </div>
  );

  function htmlDecode(str: string) {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent;
  }
}

type QuizQuestionProps = {
  question: Question;
  handleAnswer: (answer: Answer) => void;
};

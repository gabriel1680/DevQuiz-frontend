import { Question } from "./Quiz";
import { QuizAnswer } from "./QuizAnswer";

export function QuizQuestion({ question, index, handleAnswer }: QuizQuestionProps) {
  return (
    <div>
      <h2>Questão {index}</h2>
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

type QuizQuestionProps = {
  question: Question;
  index: number;
  handleAnswer: () => void;
}

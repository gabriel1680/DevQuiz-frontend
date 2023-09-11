export function QuizAnswer({ questionId, answer, handleAnswer }: QuizAnswerProps) {
  return (
    <div>
      <input
        type="radio"
        name={`Q[${questionId}]`}
        value={answer}
        onChange={handleAnswer} />
      <label htmlFor={`Q[${questionId}]`}>{answer}</label>
    </div>
  );
}

type QuizAnswerProps = {
  questionId: string;
  answer: string;
  handleAnswer: () => void;
}
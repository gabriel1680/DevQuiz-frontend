
export function QuizAnswer({ questionId, answer, handleAnswer }) {
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

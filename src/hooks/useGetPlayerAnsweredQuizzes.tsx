import { useEffect, useState } from "react";
import { UserQuiz } from "../types/Quiz";
import { useQuizGateway } from "./context-hooks";

export default function useGetPlayerAnsweredQuizzes(
  playerId: number,
  refetch: number
) {
  const quizGateway = useQuizGateway();
  const [quizzes, setQuizzes] = useState<UserQuiz[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    quizGateway
      .getQuizAnswers(playerId)
      .then(quizzes => setQuizzes(quizzes))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [playerId, refetch, quizGateway]);

  return { quizzes, error, isLoading };
}

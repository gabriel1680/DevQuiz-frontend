import { useEffect, useState } from "react";
import { UserQuiz } from "../types/Quiz";
import { getUserQuizzes } from "../utils/api";

export default function useGetPlayerAnsweredQuizzes(username: string) {
  const [quizzes, setQuizzes] = useState<UserQuiz[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserQuizzes(username)
      .then(quizzes => setQuizzes(quizzes))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [username]);

  return { quizzes, error, isLoading }
}

import { useEffect, useState } from "react";

import { Question } from "../types/Quiz";
import { getQuestions } from "../utils/api";

export default function useGetRandomQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestions()
      .then(questions => setQuestions(questions))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { questions, error, isLoading };
}

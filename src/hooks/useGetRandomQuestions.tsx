import { useEffect, useState } from "react";

import { Question } from "../types/Quiz";
import { useRandomQuestionsGateway } from "./context-hooks";

export default function useGetRandomQuestions(refetch = 0) {
  const questionsGateway = useRandomQuestionsGateway();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    questionsGateway
      .getRadomQuestions()
      .then(questions => setQuestions(questions))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [refetch]);

  return { questions, error, isLoading };
}

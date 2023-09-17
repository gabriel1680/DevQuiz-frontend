import axios from "axios";

// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
export const QUESTIONS_API_URL =
  import.meta.env.VITE_QUIZ_API_URL || "https://opentdb.com/api.php";

export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export const oQuestionsApi = axios.create({ baseURL: QUESTIONS_API_URL });

export const oBackendApi = axios.create({ baseURL: BACKEND_URL });

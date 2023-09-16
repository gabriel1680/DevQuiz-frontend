import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import QuizView from "./pages/QuizView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <QuizView />,
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import "./index.css";
import {
  PlayerGatewayContext,
  QuizGatewayContext,
  RandomQuestionsGatewayContext,
} from "./context/GatewayContext.js";
import { InMemoryPlayerGateway } from "./gateways/memory/InMemoryPlayerGateway.js";
import { InMemoryQuizGateway } from "./gateways/memory/InMemoryQuizGateway.js";
import { InMemoryRandomQuestionsGateway } from "./gateways/memory/InMemoryRandomQuestionsGateway.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PlayerGatewayContext.Provider value={new InMemoryPlayerGateway()}>
      <QuizGatewayContext.Provider value={new InMemoryQuizGateway()}>
        <RandomQuestionsGatewayContext.Provider
          value={new InMemoryRandomQuestionsGateway()}
        >
          <App />
        </RandomQuestionsGatewayContext.Provider>
      </QuizGatewayContext.Provider>
    </PlayerGatewayContext.Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import
  {
    PlayerGatewayContext,
    QuizGatewayContext,
    RandomQuestionsGatewayContext,
  } from "./context/GatewayContext.js";
import { AppGatewayFactory } from "./gateways/AppGatewayFactory.js";
import "./index.css";

const isDev = import.meta.env.DEV;

const { playerGateway, quizGateway, randomQuestionsGateway } =
  AppGatewayFactory.create("axios");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PlayerGatewayContext.Provider value={playerGateway}>
      <QuizGatewayContext.Provider value={quizGateway}>
        <RandomQuestionsGatewayContext.Provider value={randomQuestionsGateway}>
          <App />
        </RandomQuestionsGatewayContext.Provider>
      </QuizGatewayContext.Provider>
    </PlayerGatewayContext.Provider>
  </React.StrictMode>
);

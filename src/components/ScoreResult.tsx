import { Link } from "react-router-dom";

export default function ScoreResult({
  username,
  finalScore,
  totalScore,
  onRetry,
}: ResultProps) {
  return (
    <div>
      <h2>Fim de jogo</h2>
      <div>
        Jogador: <b>{username}</b>
      </div>
      <div style={{ margin: "16px 0" }}>
        Respostas corretas:{" "}
        <span style={{ color: "#2ecc71" }}>{finalScore}</span>
      </div>
      <div>
        Respostas erradas:{" "}
        <span style={{ color: "#e74c3c" }}>{totalScore - finalScore}</span>
      </div>
      <div style={{ margin: "16px 0" }}>
        Pontuação:{" "}
        <span style={{ color: getScoreHexColor() }}>{finalScore}</span>/
        {totalScore}
      </div>
      <div>
        <button
          style={{
            padding: "8px",
            backgroundColor: "#EE4876",
            border: "none",
            borderRadius: "60px",
            width: "100%",
            color: "white",
            cursor: "pointer",
            margin: "24px 0",
            fontSize: "18px",
          }}
          onClick={onRetry}
        >
          Iniciar uma nova tentativa
        </button>
      </div>
    </div>
  );

  function getScoreHexColor() {
    if (finalScore <= 5) return "#e74c3c";

    if (finalScore > 5 && finalScore < 8) return "#f1c40f";

    if (finalScore > 8) return "#2ecc71";
  }
}

type ResultProps = {
  username: string;
  finalScore: number;
  totalScore: number;
  onRetry: () => Promise<void>;
};

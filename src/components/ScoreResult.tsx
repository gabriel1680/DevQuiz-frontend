export default function ScoreResult({
  username,
  finalScore,
  totalScore,
  onRetry,
}: ResultProps) {
  return (
    <>
      <div>Fim de jogo</div>
      <div>Jogador: {username}</div>
      <div>Respostas corretas: {finalScore}</div>
      <div>Respostas erradas: {totalScore - finalScore}</div>
      <div>
        Pontuação: {finalScore}/{totalScore}
      </div>
      <div>
        <button onClick={onRetry}>Iniciar uma nova tentativa</button>
        <a href="/">Voltar para home</a>
      </div>
    </>
  );
}

type ResultProps = {
  username: string;
  finalScore: number;
  totalScore: number;
  onRetry: () => Promise<void>;
};

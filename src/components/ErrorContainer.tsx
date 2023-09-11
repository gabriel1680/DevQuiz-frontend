export function ErrorContainer({ error }: ErrorContainerProps) {
  return (
    <div className="error-container">
      <h3>Parece que algo deu errado ao carregar os dados:</h3>
      <p>{error}</p>
    </div>
  );
}

type ErrorContainerProps = {
  error: string;
}
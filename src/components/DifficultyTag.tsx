export function DifficultyTag({ difficulty }: DifficultyTagProps) {
  const colors = getDifficultyTagColors(difficulty);
  return (
    <span
      style={{
        color: colors.color,
        border: `1px solid ${colors.color}`,
        padding: "2px 12px",
        borderRadius: "24px",
        backgroundColor: colors.background,
      }}
    >
      {difficulty}
    </span>
  );

  function getDifficultyTagColors(difficulty: string) {
    switch (difficulty) {
      case "easy":
        return { color: "#2ecc71", background: "rgba(46, 204, 113, 0.20)" };
      case "medium":
        return { color: "#f1c40f", background: "rgba(241, 196, 15, 0.20)" };
      case "hard":
        return { color: "#e74c3c", background: "rgba(231, 76, 60, 0.20)" };
      default:
        return { color: "#C9C9C9", background: "" };
    }
  }
}

type DifficultyTagProps = {
  difficulty: string;
};

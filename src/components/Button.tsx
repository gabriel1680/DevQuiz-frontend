import React, { MouseEvent } from "react";

export default function Button({
  onClick,
  disabled = false,
  loading = false,
  children,
}: ButtonProps) {
  return (
    <button
      style={{
        padding: "8px",
        backgroundColor: disabled ? "gray" : "#EE4876",
        border: "none",
        borderRadius: "60px",
        width: "100%",
        color: "white",
        cursor: disabled ? "not-allowed" : "pointer",
        margin: "24px 0",
        fontSize: "18px",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}

type ButtonProps = React.PropsWithChildren & {
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};

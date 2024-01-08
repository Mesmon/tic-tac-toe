import { resetGame } from "../api";

const ResetButton = () => {
  return (
    <div>
      <button
        onClick={resetGame}
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "20px",
          borderRadius: "12px",
          border: "2px solid black",
          cursor: "pointer",
          margin: "12px 2px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;

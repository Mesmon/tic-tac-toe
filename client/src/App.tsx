import React from "react";
import "./App.css";
import GamePage from "./components/game-page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <GamePage />
      </header>
    </div>
  );
}

export default App;

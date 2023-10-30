import { useState } from "react";

import PlayerBig from "./Components/PlayerBig";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';
      
      if  (prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updaredTurns = [
        { square: { row: rowIndex, col: colIndex } , player: currentPlayer },
        ...prevTurns,
      ];
      return updaredTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerBig
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <PlayerBig
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSqueare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;

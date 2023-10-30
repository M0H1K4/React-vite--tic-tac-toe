import { useState } from "react";

import PlayerBig from "./Components/PlayerBig";
import GameBoard from "./Components/GameBoard";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerBig initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <PlayerBig initialName="player 2" symbol="O" isActive={activePlayer === 'O'}  />
        </ol>
       <GameBoard onSelectSqueare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  );
}

export default App;

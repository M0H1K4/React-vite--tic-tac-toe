import Player from "./Player";
import Luka from "./Components/luka";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X" />
          <Player name="player 2" symbol="O" />
          <Luka />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;

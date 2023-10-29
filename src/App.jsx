import Play from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Play name="player 1" symbol="X" />
          <Play name="player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;

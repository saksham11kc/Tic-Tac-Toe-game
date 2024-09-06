import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X" initialName="Player 1" />
          <Player symbol="O" initialName="Player 2" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;

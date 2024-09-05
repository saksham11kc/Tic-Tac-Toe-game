import Player from "./components/Player.jsx";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X" name="Player 1" />
          <Player symbol="O" name="Player 2" />
        </ol>
      </div>
    </main>
  );
}

export default App;

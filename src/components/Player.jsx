import "../index.css";
import { useState } from "react";
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdititing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((inverseEdit) => !inverseEdit);
    console.log;
  }
  function toSaveInput() {}

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEdititing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <>
      <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>
          {isEdititing ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
}

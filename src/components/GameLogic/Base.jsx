import React, { useState } from "react";
import Landing from "../LandingPage/Landing";

export default function Base() {
  const [game, StartGame] = useState(false);

  function onClickStartGame() {
    StartGame(true);
  }

  return (
    <div>
      {!game && <Landing startGame={onClickStartGame} />}
      {game && <h1>Hi</h1>}
    </div>
  );
}

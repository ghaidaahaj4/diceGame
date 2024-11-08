import React, { useState } from "react";
import Landing from "../LandingPage/Landing";
import StartPage from "./StartPage";
export default function Base() {
  const [game, StartGame] = useState(false);

  function onClickStartGame() {
    StartGame(true);
  }

  return (
    <div>
      {!game && <Landing startGame={onClickStartGame} />}
      {game && <StartPage />}
    </div>
  );
}
